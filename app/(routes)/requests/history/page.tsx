import RequestsInfo from './components/RequestsInfo'
import RequestsTable from './components/RequestsTable'

export default function RequestHistoryPage() {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
      <RequestsInfo />
      <RequestsTable />
    </div>
  )
}
