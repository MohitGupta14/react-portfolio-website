import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm currently open to new opportunities and open to relocation.
            Whether you have a question, a project idea, or just want to connect
            — feel free to drop me an email.
          </p>
          <a
            href="mailto:mohitguptaofficial53@gmail.com"
            className="mailto-link"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mailto-icon" />
            <span>mohitguptaofficial53@gmail.com</span>
          </a>
        </div>
        <div className="info-map">
          Mohit Gupta,
          <br />
          Bengaluru, India
          <br />
          Open to Relocation
          <br />
          <br />
          <span>mohitguptaofficial53@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[12.9716, 77.5946]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.9716, 77.5946]}>
              <Popup>Mohit is based in Bengaluru. Let's connect!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
