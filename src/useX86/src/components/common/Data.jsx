import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import Loader from "./Loader";

const Data = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        const { data, error } = await supabase
          .from("x86asm")
          .select("*")
          .order("score", { ascending: false });

        if (error) throw error;
        setScores(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchScores();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Quiz Leaderboard</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-gray-500">University</th>
              <th className="px-6 py-3 text-left text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {scores.map((score) => (
              <tr key={score.id}>
                <td className="px-6 py-4">{score.first_name}</td>
                <td className="px-6 py-4">{score.university}</td>
                <td className="px-6 py-4">{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
