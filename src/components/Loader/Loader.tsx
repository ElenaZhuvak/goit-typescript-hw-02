import { BeatLoader } from "react-spinners"
import css from './Loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <BeatLoader
        color="#1134e9"
        cssOverride={{}}
        loading
        margin={4}
        size={15}
        speedMultiplier={0.5}
      />
    </div>
  )
}

export default Loader