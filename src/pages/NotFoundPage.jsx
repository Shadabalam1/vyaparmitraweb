import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found (404)"
        description="The page you were looking for could not be found. Return to Vyapar Mitra home."
        canonicalPath="/404"
      />

      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto font-black text-2xl">
            404
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-sm transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
