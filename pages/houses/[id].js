import Head from 'next/head'
import houses from '../../houses.js'
// import { prefix } from '../../utils/prefix.js';
// import Image from 'next/image'

export default function House(props) {
    return (
        <div>
            <Head>
                <title>{props.house.title}</title>
            </Head>
            <img src={props.house.picture} width="100%" alt="House picture" />
            {/*<Image*/}
            {/*    alt="House picture"*/}
            {/*    src={`${prefix}/${props.house.picture}`}*/}
            {/*    layout="responsive"*/}
            {/*    objectFit="cover"*/}
            {/*    width={6}*/}
            {/*    height={4} />*/}
            <p>
                {props.house.type} - {props.house.town}
            </p>
            <p>{props.house.title}</p>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query

    return {
        props: {
            house: houses.filter((house) => house.id === parseInt(id))[0]
        }
    }
}
