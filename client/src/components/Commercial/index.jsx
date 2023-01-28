import './index.scss'
import Box from "./Box"
const data = [
  {
    image : "https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services1.svg",
    title: 'Commercial Cleaning',
    text : "Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero. "
  },
  {
    image : "https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services1.svg",
    title: 'Commercial Cleaning',
    text : "Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero. "
  },
  {
    image : "https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services3.svg",
    title: 'Commercial Cleaning',
    text : "Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero. "
  },
  {
    image : "https://preview.colorlib.com/theme/thelogistico/assets/img/icon/services3.svg",
    title: 'Commercial Cleaning',
    text : "Ullamcorper scelerisque congue purus aenean blandit. Interdum euismod sodales adipiscing placerat quam neque libero. "
  }
]


export default function Index() {
  return (
    <section className="commercial">
      <div className="row">
        {data.map( (item,index) => <Box key={index} data={item} />  )}
      </div>
    </section>
  )
}

