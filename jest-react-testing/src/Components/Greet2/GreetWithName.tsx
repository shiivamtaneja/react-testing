import { GreetWithNameProps } from "./Greet.types"

export const GreetWithName = (props: GreetWithNameProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}
