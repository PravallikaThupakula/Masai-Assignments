import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({ name, email, feedback });
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <Button onClick={handleSubmit}>Submit</Button>

        {submittedData && (
          <div className="mt-4">
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>Feedback:</b> {submittedData.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
