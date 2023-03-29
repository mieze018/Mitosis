export default function Button(props: {
  children: Element
  variant: 'primary' | 'secondary' | 'tertiary'
  size: string
  corner: string
}) {
  return <button {...props}>{props.children}</button>
}
