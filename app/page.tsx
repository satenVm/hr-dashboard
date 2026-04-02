import StatsCard from "./components/StatsCard"
import DepartmentChart from "./components/DepartmentChart"
import EmployeeTable from "./components/EmployeeTable"
export default function Home() {
  return (
    <main className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium">HR Dashboard</h1>
        <p className="text-sm text-gray-500">April 2026</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-8">
        <StatsCard label="Total Employees" value="148" delta="+6 this month" up={true} />
        <StatsCard label="Departments" value="7" delta="+1 new" up={true} />
        <StatsCard label="Avg Salary" value="$4,820" delta="+2.3%" up={true} />
        <StatsCard label="Turnover Rate" value="4.1%" delta="-0.8% vs last month" up={false} />
      </div>
      <div className="grid grid-cols-2 gap-3">
  <DepartmentChart />
</div>
<EmployeeTable />
    </main>
  )
}