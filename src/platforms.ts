import { IoLogoWindows } from "react-icons/io5";

const platformsArr = [
    {
        name: "PC",
        icon: 'https://w0.peakpx.com/wallpaper/828/1004/HD-wallpaper-windows-glowing-logo-blue-windows-computer-logo.jpg'
    },
    {
        name: "Playstation 5",
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAeFBMVEUlJSX///8AAAAcHBwjIyMfHx/8/PxjY2NERET5+flmZmYnJycLCwsTExMPDw8aGhpNTU0+Pj6zs7Pd3d1JSUnl5eXs7OzX19d0dHRfX1+Tk5NUVFR/f3+bm5u7u7uNjY3Nzc04ODirq6t1dXXHx8cwMDCioqKPj48EuNwxAAAEQ0lEQVR4nO3byXKrOBgFYNCAAQkwZjIGDHY8vP8btmRiEOR2qnpxGxecb5EKKRZw8mu0bFkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAjln6AzyWQzi8EJQFnSz/Fh2JlcqqoDHh/iTIycd+27excpyogJpCNSVAdjuIkh3pvSbr0A32Udzg6n6xoShZStK03unNsg1ec9jJa+qE+xSSc16/5wWfB0o/1Gag/qZyX/HwMMLpb83Cc7x/5IUbbmjWrNr6+U7rtA/TLZjhXYpHH+6Jzo81Pe8xwvlRPEw6X5zvb+qBuhuNHliDJMKo3RGy8WzbDKdX8j3TDZVZRVM40nNvYPz+2PmKZ4VRqZUXOYzjFBc1qDIdPw8nLjZeOGc6eq2ZlhON9bXwZYYTjzMOxW7n04y1rFo5FDkY4DcIxwhEIx4RwfvFrOCeEM4STzvocpw6XfrxlGeF46axyPB/znH8NJ4sxQx7CcWfN6rb1D2qm4Uwrp974BPm3ykm2u50jhN7n48YGuw5HhKfh8hhueDtHsJDs+axy6N5DNpYVkfszsy/TcIQIfb1R6p0vUmxxC1kfWOIy8M+qRhx3VjmWiOQldS3ChDWeSNlOSoIFJH5kfSLpPByFcW6pe3oyYtuJxqJS1N2QyI/K0WVCZRgfr12SJMX5cbyEki/8zP8LwaTcX/NhtO524XS0epUV3V0Tb5zueEWTSqnmQOstob6nubfF+NZdSaLpUM4kcdvOCGaY8zwv4XqzUQJSHXLjfY+ECmsSTpROSkb9yRsu89N9pctQ9T8P+FdnnBnIaqIXB2ISDsnGG5zk4Mc8sNL2nU+RrrTrEUE5iaal/bpJGMfeVDjJkExTRTJSYXBChmq7rXTvKzi+isL5biFcvWY/kZlWTtJ3wCfVAesVueqc3cfYzvJ1LkSZGD9xcRohmZoK65WVJMGscryujUM9NKnuiNxro/u27TNZ+j3+CpYO5wMyl+jFNleTPFo2xX5nhCMPzwsJVXJMJRO+ptCGbq2LdHF+t55OT3uDe1UfXgNTOYbjuEyGOgA15IelObC92tpRrjWcqBxOT+RFkeRDTUzD0bfquc4jmyaTXMsoWusSS1jB/Zn8PDdq29XY59gx17sYbpNM7nCyw9eFrHSO01OvLXZNl88D2hsn2GNG7u00GTu/tSld97ci9LsJRiXhrl+3p9Pp2db18eiXpWVWzvcpgnFwT5qShlyPbKteO3xjnAZBqARBFEVUMcORZifsZFdfhFv8AGJoJnT353Dy8/ESUrbN3cD3O/PK+xlOfqsvsj/hv8FsDDQdxu24X0YVJzcI1zqn+S/6NcT+oYd5R1dO1lRErx7A0ukIPSOOqibxYvrwqaT4xvAcJ7ISFr6H9ke6fYm+kOAnYSEcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4a/4BdsQ3j5mNBEEAAAAASUVORK5CYII='
    },
    {
        name: "Linux",
        icon: 'https://c8.alamy.com/compfr/2m8f2t5/linux-logo-fond-noir-2m8f2t5.jpg'
    },
    {
        name: "IOS",
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAErCAMAAAB9xjhEAAAAh1BMVEUAAACXl5elpaWTk5OamprV09THxcaHh4fMysu/vb7Ixsefn5+QkJCLi4vZ19jS0NGpqamwsLC4uLjd3NqBgYGvr68mJibw7+3i4d97e3vp6ekfHx/x8O74+PZPT08VFRVwcHAvLy9jY2NISEhSUlI9PT1dXVwPDxAtLS02NjZRUVFsbGwdHR0MHzudAAACxUlEQVR4nO3Z23aiMBhAYVRQAQXlDEqlntqOff/nmyBqWdaZ5O7nYn9Lq8nVXkQjBcsCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxXgSfdYOAU1nUdSlfozep6m9eRdIaWX+dbFbqQ7tCZ1HmuSuu9dIjGWS17Wxpn0iUaxbUzr0fSIRqLduHzahu/S5doFHml5NtGOkTjvW47q+F/5Ztr53Yi3aFVqpWvi/JDukNLhTqjk3TFa/u1U6mf9sJt1HE87Q8btZeO5+1U5flv0nUPSbCtqqJV1ZXfbvK7SbztZtTcNjxLF15lYV7ED6prvp6ryrg3V6+lI5VDVQVBEPe7in7lVe7spDs/qyJoQ4N7bRB0b3sj9bcKpEODIjARB6Vs56pyHOenx+nrTcfeQbbzq3JMBFPpbTUKwo6qub303WdC4eNp7eLQhPTnU51+OHMDYSq+N9mhUehFutNK557e3BU/0d9FnjfVmo+lO63M1WeqUPkz/U936rptrNu9vOK6nvh3XoWamA4gNDIKTaQ7rSxyIz3Xl+60NqlBpyqV7rR2Y7PQo3SoNYnWL6RP40h+7ZM2Ku30Qp+H8y/p0H2aru7S6+Ml+U/pYfyPtCdT6euP3/ZqbET8Z7Q06xz7nvCZyXHsG4o80cslu4lv27562ppO2x6vJEOtxjbly277XyN7ZMReCN8hKbWJky5U+pbTaWJmKf6PUzNZGBhJH1B1Urr8T9+ys1gkA7iHd77n/Mfij3Rlq7y2zJ4tf6YXl0HcIsmSX5FPyclGurFz0ITOpC86Phxns+Tu1nZ73w4T6YuOPedH6Cwpm8ulSR7pg+q0rLdbVrk/favhR3ZQrdfOcjDr3vncl2XZvH33Zo6NmjqKXxv9ZZNtnjahj002vEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM1F8V+1tkD/CP+AAAAABJRU5ErkJggg=='
    },
    {
        name: "Android",
        icon: 'https://img.goodfon.com/wallpaper/big/7/d5/minimalizm-android-google-tech.webp'
    },
    {
        name: "Nintendo Switch",
        icon: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a1ba071d-c6b7-4189-98f2-7e267b9b1755._CR522%2C0%2C840%2C332_SX1500_.jpg'
    },
    {
        name: "XBOX",
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87g-h-SfDj0eIOZDeXB0AOmsGfYDRKLLRzdql9eyJOw&s'
    }
] as const

export default platformsArr;