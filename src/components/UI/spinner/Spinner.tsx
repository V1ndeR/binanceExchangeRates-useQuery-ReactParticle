import './Spinner.css'
import { FC } from 'react'

export const Spinner: FC = () => (
  <div className="loader-wrapper">
    <div className="loader">
      <div className="loader loader-inner" />
    </div>
  </div>
)
