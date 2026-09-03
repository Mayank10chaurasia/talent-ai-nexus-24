import { useNavigate, useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function CandApply() {
  const { id } = useParams();

  const nav = useNavigate();

  // ==========================================
  // STATE
  // ==========================================

  const [file, setFile] = useState<File | null>(null);

  const [resumeData, setResumeData] = useState<string | null>(null);

  const [resumeLoading, setResumeLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit } = useForm<Record<string, string>>();

  // ==========================================
  // CONVERT PDF TO BASE64
  // ==========================================

  useEffect(() => {
    if (!file) {
      setResumeData(null);
      setResumeLoading(false);

      return;
    }

    setResumeLoading(true);

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;

      setResumeData(result);

      setResumeLoading(false);

      console.log("Resume converted:", result.startsWith("data:application/pdf;base64,"));
    };

    reader.onerror = () => {
      toast.error("Unable to read resume file.");

      setResumeData(null);

      setResumeLoading(false);
    };

    reader.readAsDataURL(file);
  }, [file]);

  // ==========================================
  // FILE SELECTION
  // ==========================================

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    // Only PDF
    if (selectedFile.type !== "application/pdf") {
      toast.error("Please upload a PDF file.");

      e.target.value = "";

      return;
    }

    // Maximum 10MB
    const maxSize = 10 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      toast.error("Resume must be smaller than 10MB.");

      e.target.value = "";

      return;
    }

    setFile(selectedFile);
  };

  // ==========================================
  // SUBMIT APPLICATION
  // ==========================================

  const onSubmit = async (values: Record<string, string>) => {
    if (!id) {
      toast.error("Job ID not found.");

      return;
    }

    // Resume required
    if (!file) {
      toast.error("Please upload your resume.");

      return;
    }

    // Still converting PDF
    if (resumeLoading) {
      toast.error("Please wait for your resume to finish processing.");

      return;
    }

    // Base64 wasn't generated
    if (!resumeData) {
      toast.error("Resume could not be processed.");

      return;
    }

    setSubmitting(true);

    try {
      // ======================================
      // SEND TO EXPRESS
      // ======================================

      await api.post("/applications", {
        jobId: id,

        coverLetter: values.projects || undefined,

        // Base64 PDF
        resumeUrl: resumeData,
      });

      toast.success("Application submitted");

      nav("/candidate/applied");
    } catch (e: any) {
      console.error("Application error:", e);

      toast.error(e.response?.data?.message || e.message || "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="space-y-6">
      <PageHeader
        title="Apply for role"

        description="Submit your application"

        actions={
          <Button asChild variant="outline" className="rounded-xl">
            <Link to={`/candidate/jobs/${id}`}>Cancel</Link>
          </Button>
        }
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="p-6 sm:p-8 space-y-6">
          {/* =================================
              RESUME
          ================================= */}

          <div>
            <Label>Resume (PDF)</Label>

            <label
              className="
                mt-1.5
                flex
                flex-col
                items-center
                justify-center
                border-2
                border-dashed
                rounded-2xl
                p-8
                cursor-pointer
                hover:bg-muted/50
                transition
              "
            >
              <UploadCloud
                className="
                  h-8
                  w-8
                  text-muted-foreground
                  mb-2
                "
              />

              <p className="text-sm font-medium">{file ? file.name : "Drag & drop your resume"}</p>

              <p
                className="
                  text-xs
                  text-muted-foreground
                  mt-1
                "
              >
                PDF only, max 10MB
              </p>

              {resumeLoading && (
                <p
                  className="
                      text-xs
                      mt-2
                    "
                >
                  Processing resume...
                </p>
              )}

              <input
                type="file"

                accept="application/pdf"

                className="hidden"

                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* =================================
              CANDIDATE DETAILS
          ================================= */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            <div>
              <Label>Full name</Label>

              <Input
                required

                {...register("name")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>Email</Label>

              <Input
                type="email"

                required

                {...register("email")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>Education</Label>

              <Input
                {...register("education")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>Years of experience</Label>

              <Input
                {...register("exp")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>Portfolio</Label>

              <Input
                {...register("portfolio")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>LinkedIn</Label>

              <Input
                {...register("linkedin")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>GitHub</Label>

              <Input
                {...register("github")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>

            <div>
              <Label>Skills</Label>

              <Input
                placeholder="
                  React, TypeScript...
                "

                {...register("skills")}

                className="
                  mt-1.5
                  rounded-xl
                "
              />
            </div>
          </div>

          {/* =================================
              PROJECTS
          ================================= */}

          <div>
            <Label>Notable projects</Label>

            <Textarea
              rows={4}

              {...register("projects")}

              className="
                mt-1.5
                rounded-xl
              "
            />
          </div>
        </Card>

        {/* ===================================
            SUBMIT BUTTON
        =================================== */}

        <div
          className="
            mt-6
            flex
            justify-end
          "
        >
          <Button
            type="submit"

            disabled={submitting || resumeLoading}

            className="rounded-xl"

            style={{
              background: "var(--gradient-primary)",
            }}
          >
            {submitting
              ? "Submitting..."
              : resumeLoading
                ? "Processing resume..."
                : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
}
