import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../../store/counter'

export default function useGlobalCounter () {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const add = () => {
    dispatch(increment())
  }

  const substract = () => {
    dispatch(decrement())
  }

  return {
    count,
    add,
    substract
  }
}
