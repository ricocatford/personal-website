export default function Bio() {
    return (
        <div className="flex justify-between bio__container">
            <div className="bio__img__wrapper">
                <img
                    src="images/bio.jpg"
                    alt="Ricardo Albarenque"
                    className="bio__img"
                />
            </div>
            <div className="bio__text__wrapper">
                <p className="bio__text">
                    Hello! My name is Ricardo Albarenque, but feel free to call
                    me Rico. I was born in Argentina and raised in Spain.
                    Recently moved back to Spain after seven years in London.
                    Technology has always been a part of my life, starting from
                    my early days as a kid when I got my hands on my first PC
                    with Windows 98. When my family moved to Spain during my
                    teenage years, I ventured into website development using
                    tools like Adobe Dreamweaver, Flash, and Photoshop. As part
                    of a big family, we had to be resourceful, so my father and
                    brothers would collect parts from various computers to build
                    new setups or upgrade existing ones.
                </p>
                <p className="bio__text">
                    As I grew up, my focus shifted from websites to music,
                    particularly drumming. Drumming and coding are my two
                    greatest passions. Recently, I decided to rekindle my
                    interest in coding and joined a bootcamp. Shortly
                    thereafter, I enrolled in college to study Full-Stack Web
                    Development.
                </p>
                <p className="bio__text">
                    I consider myself someone who values creating high-quality
                    work. I have always been driven by a competitive spirit,
                    constantly pushing myself to the limits and striving to
                    excel in everything I do. I enjoy taking on challenges and
                    solving problems, which is why I rediscovered my love for
                    coding.
                </p>
                <p className="bio__text">
                    Apart from coding, I have a range of other interests and
                    hobbies. I love spending time in nature, whether it's going
                    for hikes or simply enjoying the outdoors. Family and
                    friends are also very important to me. I have a competitive
                    streak when it comes to gaming, particularly in FPS and MMO
                    genres. Additionally, I enjoy watching movies and exploring
                    topics like psychology and astronomy through books and
                    videos.
                </p>
            </div>
        </div>
    );
}
