import React from "react";
import {
  Boxes,
  ShoppingCart,
  TrendingUp,
  Receipt,
  BookOpen,
  AlertTriangle,
  ArrowDownToLine,
  ArrowUpFromLine,
  Truck,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  WifiOff,
  User,
  CreditCard,
  Banknote,
  QrCode,
  FileText,
  Percent,
} from "lucide-react";

export default function PhoneMockup({ screenId = "dashboard", imageSrc = null }) {
  if (imageSrc) {
    return (
      <div className="relative mx-auto w-[310px] sm:w-[340px] rounded-[42px] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
        <img
          src={imageSrc}
          alt={`Vyapar Mitra ${screenId} screen`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[310px] sm:w-[340px] rounded-[42px] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19.2] flex flex-col font-sans select-none text-slate-800">
      {/* Phone Hardware Details */}
      {/* Punch Hole Camera */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-30 ring-1 ring-slate-800/60" />

      {/* Android Status Bar */}
      <div className="w-full bg-emerald-900 text-white px-5 pt-2 pb-1.5 flex items-center justify-between text-[11px] font-medium tracking-tight z-20">
        <span>10:45 AM</span>
        <div className="flex items-center space-x-1.5 opacity-90">
          <WifiOff className="w-3 h-3 text-emerald-300" />
          <span className="text-[10px] text-emerald-200">Local</span>
          <span className="text-[10px]">94%</span>
        </div>
      </div>

      {/* Android App Top Header */}
      <div className="bg-emerald-800 text-white px-4 py-2.5 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xs text-white shadow-inner">
            VM
          </div>
          <div>
            <h4 className="text-xs font-bold leading-none tracking-tight">Vyapar Mitra</h4>
            <p className="text-[10px] text-emerald-200 leading-none mt-0.5">Shree Ganesh Store</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="text-[9px] bg-emerald-700 text-emerald-100 px-2 py-0.5 rounded-full font-medium">
            Offline Ready
          </span>
        </div>
      </div>

      {/* Screen Body */}
      <div className="flex-1 bg-slate-50 overflow-y-auto overflow-x-hidden p-3 text-left">
        {screenId === "dashboard" && <DashboardContent />}
        {screenId === "inventory" && <InventoryContent />}
        {screenId === "new-sale" && <NewSaleContent />}
        {screenId === "purchase" && <PurchaseContent />}
        {screenId === "expenses" && <ExpenseContent />}
        {screenId === "profit-loss" && <ProfitLossContent />}
        {screenId === "ledger" && <LedgerContent />}
      </div>

      {/* Android Bottom Navigation Pill */}
      <div className="bg-white border-t border-slate-200 py-2 px-3 flex justify-around text-slate-500">
        <div className={`flex flex-col items-center text-[9px] ${screenId === "dashboard" ? "text-emerald-700 font-semibold" : ""}`}>
          <Boxes className="w-3.5 h-3.5 mb-0.5" />
          <span>Home</span>
        </div>
        <div className={`flex flex-col items-center text-[9px] ${screenId === "inventory" ? "text-emerald-700 font-semibold" : ""}`}>
          <Boxes className="w-3.5 h-3.5 mb-0.5" />
          <span>Stock</span>
        </div>
        <div className={`flex flex-col items-center text-[9px] ${screenId === "new-sale" ? "text-emerald-700 font-semibold" : ""}`}>
          <div className="w-6 h-6 -mt-3 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <Plus className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] mt-0.5 text-emerald-800 font-bold">Sale</span>
        </div>
        <div className={`flex flex-col items-center text-[9px] ${screenId === "ledger" ? "text-emerald-700 font-semibold" : ""}`}>
          <BookOpen className="w-3.5 h-3.5 mb-0.5" />
          <span>Ledger</span>
        </div>
        <div className={`flex flex-col items-center text-[9px] ${screenId === "profit-loss" ? "text-emerald-700 font-semibold" : ""}`}>
          <TrendingUp className="w-3.5 h-3.5 mb-0.5" />
          <span>Reports</span>
        </div>
      </div>

      {/* Bottom Swipe Bar */}
      <div className="bg-white py-1 flex justify-center">
        <div className="w-24 h-1 bg-slate-300 rounded-full" />
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="space-y-3">
      {/* Today's Sales Card */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-3.5 rounded-2xl shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] text-emerald-200 font-medium uppercase tracking-wider">Aaj Ki Bikri (Today's Sales)</p>
            <h3 className="text-xl font-extrabold mt-0.5">₹18,450</h3>
          </div>
          <span className="bg-emerald-700/80 text-emerald-100 text-[10px] px-2 py-0.5 rounded-full font-medium">
            32 Bills
          </span>
        </div>
        <div className="mt-3 pt-2.5 border-t border-emerald-700/60 grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <span className="text-emerald-300">Cash Received:</span>
            <p className="font-semibold text-white">₹14,250</p>
          </div>
          <div>
            <span className="text-emerald-300">UPI / Online:</span>
            <p className="font-semibold text-white">₹4,200</p>
          </div>
        </div>
      </div>

      {/* Mini Stats 2x2 */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
          <p className="text-[10px] text-slate-500 font-medium">Stock Value</p>
          <p className="text-sm font-bold text-slate-900 mt-0.5">₹2,48,900</p>
          <span className="text-[9px] text-emerald-600 font-medium">142 Items catalog</span>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
          <p className="text-[10px] text-slate-500 font-medium">Customer Udhaar</p>
          <p className="text-sm font-bold text-amber-700 mt-0.5">₹12,300</p>
          <span className="text-[9px] text-slate-500">8 pending accounts</span>
        </div>
      </div>

      {/* Low Stock Warning Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <div>
            <p className="text-[11px] font-bold text-amber-900">4 Low Stock Items</p>
            <p className="text-[9px] text-amber-700">Mustard Oil, Fortune, Amul...</p>
          </div>
        </div>
        <span className="text-[10px] text-emerald-800 font-bold underline cursor-pointer">View</span>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-3 gap-1.5">
        <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2 rounded-xl text-center border border-emerald-200">
          <ShoppingCart className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-700" />
          <span className="text-[9px] font-bold block">+ New Sale</span>
        </button>
        <button className="bg-white hover:bg-slate-50 text-slate-700 py-2 rounded-xl text-center border border-slate-200">
          <ArrowDownToLine className="w-3.5 h-3.5 mx-auto mb-1 text-slate-600" />
          <span className="text-[9px] font-bold block">Stock In</span>
        </button>
        <button className="bg-white hover:bg-slate-50 text-slate-700 py-2 rounded-xl text-center border border-slate-200">
          <Receipt className="w-3.5 h-3.5 mx-auto mb-1 text-slate-600" />
          <span className="text-[9px] font-bold block">Expense</span>
        </button>
      </div>

      {/* Recent Bills */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <h4 className="text-[11px] font-bold text-slate-700">Recent Transactions</h4>
          <span className="text-[9px] text-slate-500">All (32)</span>
        </div>
        <div className="space-y-1.5">
          <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between items-center text-[10px]">
            <div>
              <p className="font-semibold text-slate-800">Bill #VM-208</p>
              <p className="text-[9px] text-slate-400">10:41 AM • 3 items</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-emerald-700">₹840</p>
              <span className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-medium">UPI</span>
            </div>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200 flex justify-between items-center text-[10px]">
            <div>
              <p className="font-semibold text-slate-800">Bill #VM-207</p>
              <p className="text-[9px] text-slate-400">10:28 AM • 1 item</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900">₹1,250</p>
              <span className="text-[8px] bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded font-medium">Cash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InventoryContent() {
  return (
    <div className="space-y-2.5">
      <div className="relative">
        <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
        <input
          type="text"
          readOnly
          value="Search 142 items..."
          className="w-full pl-8 pr-3 py-1.5 text-[11px] bg-white border border-slate-200 rounded-xl"
        />
      </div>

      <div className="flex space-x-1.5 overflow-x-hidden text-[10px]">
        <span className="bg-emerald-800 text-white px-2.5 py-1 rounded-full font-medium">All (142)</span>
        <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">Low Stock (4)</span>
        <span className="bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded-full">Kirana</span>
        <span className="bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded-full">Spices</span>
      </div>

      <div className="space-y-1.5">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-[11px] font-bold text-slate-900">Aashirvaad Shudh Atta 10kg</h5>
              <p className="text-[9px] text-slate-500">SKU: ATT-10KG • Shelf A2</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700">₹420</span>
          </div>
          <div className="mt-2 pt-1.5 border-t border-slate-100 flex justify-between items-center text-[10px]">
            <span className="text-slate-500">In Stock: <strong className="text-slate-800">24 Bags</strong></span>
            <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">Adequate</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-amber-300 bg-amber-50/30">
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-[11px] font-bold text-slate-900">Fortune Sunflower Oil 1L</h5>
              <p className="text-[9px] text-slate-500">SKU: OIL-SUN-1L • Shelf B1</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700">₹145</span>
          </div>
          <div className="mt-2 pt-1.5 border-t border-amber-200/60 flex justify-between items-center text-[10px]">
            <span className="text-slate-600">In Stock: <strong className="text-amber-700 font-bold">4 Pouches</strong></span>
            <span className="text-[9px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-bold">Low Stock Alert</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-[11px] font-bold text-slate-900">Tata Salt 1kg</h5>
              <p className="text-[9px] text-slate-500">SKU: TATA-SLT-1</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700">₹28</span>
          </div>
          <div className="mt-2 pt-1.5 border-t border-slate-100 flex justify-between items-center text-[10px]">
            <span className="text-slate-500">In Stock: <strong className="text-slate-800">45 Pkts</strong></span>
            <span className="text-[9px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">Healthy</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-emerald-800 text-white py-2 rounded-xl text-center font-bold text-[11px] shadow-sm flex items-center justify-center space-x-1">
        <Plus className="w-3.5 h-3.5" />
        <span>Add New Product</span>
      </button>
    </div>
  );
}

function NewSaleContent() {
  return (
    <div className="space-y-2.5">
      {/* Customer Header */}
      <div className="bg-white p-2 rounded-xl border border-slate-200 flex justify-between items-center">
        <div className="flex items-center space-x-1.5">
          <User className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[10px] font-bold text-slate-800">Walk-in Counter Customer</span>
        </div>
        <span className="text-[9px] text-emerald-700 font-medium">Change</span>
      </div>

      {/* Cart Items */}
      <div className="bg-white rounded-xl border border-slate-200 p-2.5 space-y-2">
        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">Cart Items (3)</p>
        
        <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-slate-100">
          <div>
            <p className="font-semibold text-slate-900">Basmati Rice 5kg</p>
            <p className="text-[9px] text-slate-400">2 × ₹450</p>
          </div>
          <span className="font-bold text-slate-900">₹900</span>
        </div>

        <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-slate-100">
          <div>
            <p className="font-semibold text-slate-900">Mustard Oil 1L</p>
            <p className="text-[9px] text-slate-400">1 × ₹160</p>
          </div>
          <span className="font-bold text-slate-900">₹160</span>
        </div>

        <div className="flex justify-between items-center text-[10px]">
          <div>
            <p className="font-semibold text-slate-900">Maggi Masala 4-Pack</p>
            <p className="text-[9px] text-slate-400">1 × ₹56</p>
          </div>
          <span className="font-bold text-slate-900">₹56</span>
        </div>
      </div>

      {/* Total Calculations */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-2.5 space-y-1 text-[11px]">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>₹1,116</span>
        </div>
        <div className="flex justify-between text-emerald-700 font-medium">
          <span>Counter Round-off</span>
          <span>- ₹16</span>
        </div>
        <div className="flex justify-between text-sm font-extrabold text-emerald-950 pt-1 border-t border-emerald-200">
          <span>Total Payable</span>
          <span>₹1,100</span>
        </div>
      </div>

      {/* Payment Modes */}
      <div>
        <p className="text-[10px] font-bold text-slate-600 mb-1">Select Payment Mode</p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-emerald-800 text-white p-1.5 rounded-lg text-center text-[10px] font-bold flex flex-col items-center">
            <Banknote className="w-3.5 h-3.5 mb-0.5" />
            Cash
          </div>
          <div className="bg-white border border-slate-200 text-slate-700 p-1.5 rounded-lg text-center text-[10px] font-medium flex flex-col items-center">
            <QrCode className="w-3.5 h-3.5 mb-0.5 text-slate-500" />
            UPI
          </div>
          <div className="bg-white border border-slate-200 text-slate-700 p-1.5 rounded-lg text-center text-[10px] font-medium flex flex-col items-center">
            <Clock className="w-3.5 h-3.5 mb-0.5 text-slate-500" />
            Udhaar
          </div>
        </div>
      </div>

      <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-xl text-center font-bold text-xs shadow-md">
        Save &amp; Generate Bill (₹1,100)
      </button>
    </div>
  );
}

function PurchaseContent() {
  return (
    <div className="space-y-2.5">
      <div className="bg-white p-2.5 rounded-xl border border-slate-200">
        <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">New Purchase Invoice</span>
        <h4 className="text-xs font-bold text-slate-900 mt-1">Balaji Wholesale &amp; Traders</h4>
        <p className="text-[10px] text-slate-500">Invoice: INV-2026-89 • Oct 16, 2026</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-2.5 space-y-2">
        <p className="text-[10px] font-bold text-slate-600 uppercase">Received Goods (Stock In)</p>
        
        <div className="flex justify-between items-center text-[10px] pb-1.5 border-b border-slate-100">
          <div>
            <p className="font-semibold text-slate-900">Fortune Oil 1L (Carton 24)</p>
            <p className="text-[9px] text-slate-400">2 cartons @ ₹2,800</p>
          </div>
          <span className="font-bold text-slate-900">₹5,600</span>
        </div>

        <div className="flex justify-between items-center text-[10px]">
          <div>
            <p className="font-semibold text-slate-900">Sugar 50kg Bags</p>
            <p className="text-[9px] text-slate-400">5 bags @ ₹1,950</p>
          </div>
          <span className="font-bold text-slate-900">₹9,750</span>
        </div>
      </div>

      <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-[10px] space-y-1">
        <div className="flex justify-between">
          <span className="text-slate-500">Total Purchase Bill</span>
          <span className="font-bold text-slate-900">₹15,350</span>
        </div>
        <div className="flex justify-between text-emerald-700">
          <span>Amount Paid Now (Cash)</span>
          <span className="font-bold">₹10,000</span>
        </div>
        <div className="flex justify-between text-amber-700 pt-1 border-t border-slate-100 font-bold">
          <span>Supplier Balance Due</span>
          <span>₹5,350</span>
        </div>
      </div>

      <button className="w-full bg-emerald-800 text-white py-2 rounded-xl text-center font-bold text-[11px] shadow-sm">
        Update Inventory &amp; Supplier Ledger
      </button>
    </div>
  );
}

function ExpenseContent() {
  return (
    <div className="space-y-2.5">
      <div className="bg-slate-900 text-white p-3 rounded-2xl">
        <p className="text-[10px] text-slate-400 uppercase tracking-wider">Is Mahine Ka Kharch (October)</p>
        <h3 className="text-lg font-bold mt-0.5">₹14,200</h3>
        <p className="text-[9px] text-emerald-300 mt-1">Recorded across 5 categories</p>
      </div>

      <div className="space-y-1.5">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex justify-between items-center text-[10px]">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              ₹
            </div>
            <div>
              <p className="font-bold text-slate-900">Shop Rent (Dukan Kiraya)</p>
              <p className="text-[9px] text-slate-400">Monthly • Oct 05</p>
            </div>
          </div>
          <span className="font-bold text-slate-800">₹8,000</span>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex justify-between items-center text-[10px]">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              ⚡
            </div>
            <div>
              <p className="font-bold text-slate-900">Electricity Bill (Bijli)</p>
              <p className="text-[9px] text-slate-400">Utility • Oct 10</p>
            </div>
          </div>
          <span className="font-bold text-slate-800">₹2,400</span>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex justify-between items-center text-[10px]">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              ☕
            </div>
            <div>
              <p className="font-bold text-slate-900">Tea &amp; Refreshments</p>
              <p className="text-[9px] text-slate-400">Daily shop tea</p>
            </div>
          </div>
          <span className="font-bold text-slate-800">₹850</span>
        </div>
      </div>

      <button className="w-full bg-emerald-800 text-white py-2 rounded-xl text-center font-bold text-[11px] shadow-sm flex items-center justify-center space-x-1">
        <Plus className="w-3.5 h-3.5" />
        <span>+ Add Daily Expense</span>
      </button>
    </div>
  );
}

function ProfitLossContent() {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center">
        <h4 className="text-[11px] font-bold text-slate-800">Profit &amp; Loss Statement</h4>
        <span className="text-[9px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">This Month</span>
      </div>

      <div className="bg-white p-3 rounded-2xl border border-slate-200 space-y-2 text-[10px]">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <span className="text-slate-600">Total Sales (Kul Bikri)</span>
          <span className="font-bold text-slate-900">₹1,94,200</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-slate-100 text-rose-700">
          <span>Cost of Goods Purchased</span>
          <span className="font-medium">- ₹1,42,800</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-slate-100 font-bold text-emerald-800">
          <span>Gross Margin (26.4%)</span>
          <span>₹51,400</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-slate-100 text-rose-700">
          <span>Operating Expenses</span>
          <span className="font-medium">- ₹14,200</span>
        </div>
        <div className="flex justify-between items-center pt-1 text-xs font-black text-emerald-900 bg-emerald-50/80 p-2 rounded-xl border border-emerald-200">
          <span>Net Profit (Shuddh Munafa)</span>
          <span>₹37,200</span>
        </div>
      </div>

      <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-[10px] text-emerald-900 flex items-start space-x-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p>Healthy margins recorded this month. Stock turnover is consistent.</p>
      </div>
    </div>
  );
}

function LedgerContent() {
  return (
    <div className="space-y-2.5">
      <div className="flex bg-slate-200 p-0.5 rounded-lg text-[10px] font-semibold text-slate-700">
        <span className="flex-1 bg-white text-emerald-900 text-center py-1 rounded shadow-xs">Customer (Udhaar)</span>
        <span className="flex-1 text-center py-1 text-slate-600">Suppliers (Dues)</span>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-2 rounded-xl text-center">
        <span className="text-[9px] text-amber-800 font-medium">Kul Customer Udhaar (Total Receivable)</span>
        <h4 className="text-base font-bold text-amber-900 mt-0.5">₹12,300</h4>
      </div>

      <div className="space-y-1.5">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200">
          <div className="flex justify-between items-start text-[10px]">
            <div>
              <p className="font-bold text-slate-900">Rajesh Sharma</p>
              <p className="text-[9px] text-slate-400">98765-XXXXX • 4 days ago</p>
            </div>
            <div className="text-right">
              <span className="font-bold text-amber-800">₹3,200</span>
              <p className="text-[8px] text-slate-400">Due</p>
            </div>
          </div>
          <div className="mt-2 pt-1 border-t border-slate-100 flex justify-end space-x-1.5 text-[9px]">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">History</button>
            <button className="bg-emerald-800 text-white px-2 py-0.5 rounded font-medium">Take Payment</button>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200">
          <div className="flex justify-between items-start text-[10px]">
            <div>
              <p className="font-bold text-slate-900">Anita Verma</p>
              <p className="text-[9px] text-slate-400">98230-XXXXX • Yesterday</p>
            </div>
            <div className="text-right">
              <span className="font-bold text-amber-800">₹1,450</span>
              <p className="text-[8px] text-slate-400">Due</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl border border-slate-200 flex justify-between items-center text-[10px]">
          <div>
            <p className="font-bold text-slate-900">Vikram Singh</p>
            <p className="text-[9px] text-slate-400">Settled on Oct 14</p>
          </div>
          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">All Cleared (₹0)</span>
        </div>
      </div>
    </div>
  );
}
