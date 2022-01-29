import Link from 'next/link'
// import Image from 'next/image'
// import {prefix} from "../utils/prefix";

export default function House(props) {
    return (
        <Link href="/houses/[id]" as={'houses/' + props.id}>
            <a>
                <img src={props.picture} width="100%" alt="House picture" />
                {/*<Image*/}
                {/*    alt="House picture"*/}
                {/*    src={`${prefix}/${props.picture}`}*/}
                {/*    layout="responsive"*/}
                {/*    objectFit="cover"*/}
                {/*    width={4}*/}
                {/*    height={4}*/}
                {/*/>*/}
            <p>
                {props.type} - {props.town}
            </p>
            <p>{props.title}</p>
            </a>
        </Link>
    )
}
