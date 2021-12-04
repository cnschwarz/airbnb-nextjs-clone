import Head from 'next/head'
import houses from '../../houses.js'
import Image from 'next/image'

export default function House(props) {
    return (
        <div>
            <Head>
                <title>{props.house.title}</title>
            </Head>
            <Image
                alt="House picture"
                src={props.house.picture}
                layout="responsive"
                objectFit="cover"
                width={6}
                height={4} />
            <p>
                {props.house.type} - {props.house.town}
            </p>
            <p>{props.house.title}</p>
        </div>
    )
}

export async function getStaticProps({ query }) {
    const { id } = query

    return {
        props: {
            house: houses.filter((house) => house.id === parseInt(id))[0]
        }
    }
}
