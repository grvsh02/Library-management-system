import React from "react";
import Stats from "@/src/Dashboard/stats";
import Layout from "@/src/common/components/layout";
import TransactionTable from "@/src/Dashboard/TransactionTable";

export default function Home() {
  return (
    <Layout>
        <div className="flex flex-col m-10 h-full">
            <Stats />
            <div className=" mt-10 text-4xl text-slate-700 font-semibold">Recent Transactions</div>
            <div className="mt-10">
                <TransactionTable />
            </div>
        </div>
    </Layout>
  )
}
