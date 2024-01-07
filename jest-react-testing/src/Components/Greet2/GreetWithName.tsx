type GreetWithNameProps = {
  name?: string
}
export const GreetWithName = (props: GreetWithNameProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}
