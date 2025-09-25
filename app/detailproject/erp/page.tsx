import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const Erp = () => {
  return (
    <>
      <section className=" w-full min-h-[70vh] bg-black max-h-[800px] relative">
        <Image
          src="/erp.png"
          alt="Gambaran event"
          fill
          objectFit="cover"
          priority={true}
          className="relative"
        />
        <div className="bg-white w-full h-full absolute z-10 top-0 flex gradient items-center ">
          <Container className="pl-5 md:pl-0">
            <div className="flex flex-col text-white gap-2 max-w-[70%]">
              <small className="text-xs md:text-sm tracking-wide text-white ">
                Complex ERP Website
              </small>
              <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
                I specialize in building and maintaining complex ERP systems
                with hundreds of relational tables across multiple branches,
                ensuring seamless integration and efficient business processes.
              </h1>
              <p className="md:text-base text-sm">
                Programmer | ERP Developer | System Integration
              </p>
              <p className="md:text-base text-sm">
                This website showcases my ERP project as part of my portfolio.
              </p>
            </div>
          </Container>
        </div>
      </section>
      <section className="w-full flex min-h-56 md:pt-12 pt-6 items-center mb-96 lg:mb-0">
        <Container className="bg-white relative p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Development and Maintenance of ERP System at PT Kencana Mulya
            Metalindo
          </h1>
          <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              To support the efficiency of business processes at PT Kencana
              Mulya Metalindo, I was responsible for building and maintaining an
              integrated Enterprise Resource Planning (ERP) system. This system
              was designed to connect every division within the company,
              ensuring more transparent data and smoother, well-controlled
              operations.
            </p>
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/sales order.jpg" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>

<p className="text-gray-700 leading-relaxed">
  <strong>Sales Module</strong> – Order Sales (SO), Loading Orders (SPM),
  Delivery Notes (SJ), Sales Invoices (FJ), Sales Visit Plans (RKS), and
  Sales Visit Reports (HKS).
</p>
<div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/ju.jpg" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>
            <p>
              <strong>Accounting Module</strong> – Subledger Recap & Mutation,
              Daily Cash-Count, Stock Difference Allocation, General Journal
              (JU), Accounts Payable Analysis (AP) with pivot table, Payment
              Analysis, Accounts Receivable (AR) Monitoring, Overdue
              Receivables, Receivables Collection, and Company Expense Analysis.
            </p>
<div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/ju.jpg" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>
         
            <p>
              <strong>Procurement / Purchasing Module</strong> – Goods Receipt
              Form (linked to stock mutation and damage responsibility),
              Purchase Requisitions (PP), Purchase Orders (PO), Goods Receipts
              (PB), and Purchase Invoices (FB).
            </p>

<div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/mb.png" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>
            <p>
              <strong>Inventory Module</strong> – Stock Mutation (MB), Stock
              Adjustment & Rebuild (PS), Actual Stock Information per warehouse,
              Stock Opname Schedules & Results, Competitor Data, and Return
              Memos.
            </p>
<div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/cs.png" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>
            <p>
              <strong>Master Data Module</strong> – Supplier List, Customer
              List, Salesman List, Sales Region (Rayon), and Vehicle Data.
            </p>
<div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/dashboard.png" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>
            <p>
              <strong>Dashboard</strong> – Procurement, Sales, Accounts Payable,
              Accounts Receivable, Vehicle Operational Costs, and Sales Price
              Simulation.
            </p>
<div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/konsol.png" // ganti spasi jadi strip biar aman
    alt="Sales Module Illustration"
    fill
    className="object-cover"
    priority
  />
</div>
            <p>
              <strong>Consolidation</strong> – Multi-branch integrated data
              including Customer Information with distance, Expedition Payment
              Realization (RPE), Claim for Missing Items, Competitor Data,
              Outstanding PO List, and Breakdown of Outstanding POs.
            </p>
            <p>
              With the development and maintenance of this ERP system, PT
              Kencana Mulya Metalindo is able to run its business processes in a
              more structured, transparent, and efficient manner. Each module I
              developed and maintained is fully integrated, enabling management
              to make faster and more accurate data-driven decisions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Erp;
