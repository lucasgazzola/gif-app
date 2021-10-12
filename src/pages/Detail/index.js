export default function Detail ({ params }) {
  const { id } = params
  return (
    <div>
      <h3>{id}</h3>
    </div>
  )
}
