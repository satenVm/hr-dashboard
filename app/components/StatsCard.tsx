type Props = {
    label: string
    value: string
    delta: string
    up: boolean
  }
  
  export default function StatsCard({ label, value, delta, up }: Props) {
    return (
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="text-2xl font-medium">{value}</p>
        <p className={`text-xs mt-1 ${up ? "text-green-600" : "text-red-500"}`}>
          {delta}
        </p>
      </div>
    )
  }