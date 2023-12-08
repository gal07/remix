import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ECCS POS - Report" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];
};

export default function Index() {



  return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
        <p>This is Report</p>

      </div>
  );
}