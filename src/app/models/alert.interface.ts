export interface Alert {
  init? :boolean
  type? : string,
  header? : string,
  message? : string,
  durration? :number
}

export interface Dismiss {
  init? :boolean,
  dissmiss?: boolean
}