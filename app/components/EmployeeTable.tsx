"use client"

import { useState } from "react"

const employees = [
  { name: "Anna K.", dept: "Engineering", role: "Frontend Dev", salary: "$5,200", status: "Active" },
  { name: "David M.", dept: "Product", role: "PM", salary: "$5,800", status: "Active" },
  { name: "Sara L.", dept: "Sales", role: "AE", salary: "$4,100", status: "On leave" },
  { name: "Mike P.", dept: "HR", role: "HR Specialist", salary: "$3,900", status: "Active" },
  { name: "Lena R.", dept: "Engineering", role: "Backend Dev", salary: "$5,500", status: "Active" },
  { name: "Tom S.", dept: "Sales", role: "SDR", salary: "$3,600", status: "Offboarding" },
  { name: "Nina B.", dept: "Product", role: "Designer", salary: "$4,700", status: "Active" },
  { name: "Alex V.", dept: "Engineering", role: "DevOps", salary: "$6,100", status: "Active" },
]

const statusStyle: Record<string, string> = {
  "Active": "bg-green-100 text-green-700",
  "On leave": "bg-yellow-100 text-yellow-700",
  "Offboarding": "bg-red-100 text-red-600",
}

const departments = ["All", "Engineering", "Product", "Sales", "HR"]

export default function EmployeeTable() {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? employees
    : employees.filter(e => e.dept === active)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-3">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
        Employee List
      </p>

      <div className="flex gap-2 mb-4">
        {departments.map(d => (
          <button
            key={d}
            onClick={() => setActive(d)}
            className={`px-3 py-1 rounded-full text-xs border transition-all ${
              active === d
                ? "bg-gray-900 text-white border-transparent"
                : "text-gray-500 border-gray-200 hover:border-gray-400"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-gray-400 uppercase border-b border-gray-100">
            <th className="pb-2 font-medium">Name</th>
            <th className="pb-2 font-medium">Department</th>
            <th className="pb-2 font-medium">Role</th>
            <th className="pb-2 font-medium">Salary</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((e, i) => (
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="py-3 font-medium">{e.name}</td>
              <td className="py-3 text-gray-500">{e.dept}</td>
              <td className="py-3 text-gray-500">{e.role}</td>
              <td className="py-3">{e.salary}</td>
              <td className="py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle[e.status]}`}>
                  {e.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}