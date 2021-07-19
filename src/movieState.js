import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import athlete2 from '../img/athlete2.png'
import theracer2 from '../img/the-racer2.png'
import goodtimes2 from '../img/good-times2.png'

export const MovieState = () => {
    return [
        {
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/work/the-athelte',
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description: 'Lorem Ipsum lorem ipsum'
                },
                {
                    title: 'Fresh look on a brutal sport',
                    description: 'Lorem Ipsum lorem ipsum'
                },
                {
                    title: 'Its okay lmao',
                    description: 'Lorem Ipsum lorem ipsum'
                }
            ]
        },
        {
            title: 'Good times',
            mainImg: goodtimes,
            secondaryImg: goodtimes2,
            url: '/work/good-times',
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description: 'Lorem Ipsum lorem ipsum'
                },
                {
                    title: 'Fresh look on a brutal sport',
                    description: 'Lorem Ipsum lorem ipsum'
                },
                {
                    title: 'Its okay lmao',
                    description: 'Lorem Ipsum lorem ipsum'
                }
            ]
        },
        {
            title: 'The Racer',
            mainImg: theracer,
            secondaryImg: theracer2,
            url: '/work/the-racer',
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description: 'Lorem Ipsum lorem ipsum'
                },
                {
                    title: 'Fresh look on a brutal sport',
                    description: 'Lorem Ipsum lorem ipsum'
                },
                {
                    title: 'Its okay lmao',
                    description: 'Lorem Ipsum lorem ipsum'
                }
            ]
        }
    ]
}