import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Star, TrendingUp, Trophy, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const API_URL = "https://leetcode-stats-api.herokuapp.com/crzy0codes";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function LeetCodeStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then(setData)
      .catch((err) => {
        console.error("Failed to fetch LeetCode stats", err);
        setError(true);
      });
  }, []);

  if (error) {
    return <p className="text-center text-red-500">Failed to load LeetCode stats.</p>;
  }

  if (!data) {
    return <p className="text-center text-gray-600 dark:text-gray-300">Loading LeetCode stats...</p>;
  }

  const easyPercent = (data.easySolved / data.totalSolved) * 100;
  const mediumPercent = (data.mediumSolved / data.totalSolved) * 100;
  const hardPercent = (data.hardSolved / data.totalSolved) * 100;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-foreground flex justify-center items-center gap-2">
          <BarChart3 className="w-6 h-6 text-indigo-600" />
          LeetCode Statistics
        </h1>
        <p className="text-muted-foreground mt-2">Live stats fetched from LeetCode public API</p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Problem Solving Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary">
              <AnimatedCounter end={data.totalSolved} />
            </div>
            <p className="text-muted-foreground">Total Problems Solved</p>
          </div>

          <StatBar label="Easy" value={data.easySolved} percentage={easyPercent} color="bg-green-500" />
          <StatBar label="Medium" value={data.mediumSolved} percentage={mediumPercent} color="bg-yellow-500" />
          <StatBar label="Hard" value={data.hardSolved} percentage={hardPercent} color="bg-red-500" />

          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm text-muted-foreground pt-4">
            <StatInfo label="Acceptance Rate" value={`${data.acceptanceRate}%`} icon={<CheckCircle />} />
            <StatInfo label="Ranking" value={`#${data.ranking.toLocaleString()}`} icon={<TrendingUp />} />
            <StatInfo label="Reputation" value={data.reputation} icon={<Trophy />} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatBar({ label, value, percentage, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <Progress value={percentage} className="h-2" style={{ backgroundColor: "#e5e7eb" }}>
        <div className={`h-2 rounded ${color}`} style={{ width: `${percentage}%` }} />
      </Progress>
    </div>
  );
}

function StatInfo({ label, value, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-indigo-500 mb-1">{icon}</div>
      <div className="font-semibold text-foreground">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
}
