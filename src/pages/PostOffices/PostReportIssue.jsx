import { useState } from "react";

const PostReportIssue = () => {

  const [issueName, setIssueName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issue_name: issueName, description }),
      });
      if (!response.ok) throw new Error("Failed to report issue");
      const data = await response.json();
      alert(`Issue reported: ${data.issue_name}`);
      setIssueName("");
      setDescription("");
    } catch (error) {
      console.error("Error reporting issue:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Issue Name</label>
          <input
            type="text"
            value={issueName}
            onChange={(e) => setIssueName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default PostReportIssue
