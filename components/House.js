import Link from 'next/link'
import Image from 'next/image'

export default function House(props) {
    return (
        <Link href="/houses/[id]" as={'houses/' + props.id}>
            <a>
                <Image
                    alt="House picture"
                    src={props.picture}
                    layout="responsive"
                    objectFit="cover"
                    width={6}
                    height={4}
                />
            <p>
                {props.type} - {props.town}
            </p>
            <p>{props.title}</p>
            </a>
        </Link>
    )
}
