import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { LuCheckCheck } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const img = [
    "/img/hf.jpeg",
    "/img/serve.jpeg",
    "/img/about.jpg",
    
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const list = [
    "To make heaven.",
    "To take as many people with us.",
    "To have a member of RCCG in every family of all nations.",
    "To accomplish No. 1 above, holiness will be our lifestyle.",
    "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ.",
  ];
  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col">
          <div className="w-full">
            <Carousel
              responsive={responsive}
              //   draggable
              swipeable
              autoPlay
              //   slidesToSlide={5}
              showDots
              arrows={false}
              autoPlaySpeed={3000}
              //   renderDotsOutside
              rewindWithAnimation
            >
              {img.map((img, index) => (
                <div className="historyBox overflow-hidden w-full  md:h-[500px]">
                  <Image
                    src={img}
                    alt="historyPix"
                    width={500}
                    key={index}
                    height={500}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-col gap-3 my-5 items-center ">
            <p className="text-xl md:text-3xl lg:text-4xl text-center">
              OUR FUNDAMENTAL BELIEFS
            </p>
            <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
          </div>
          <div className="w-full flex tracking-wider flex-col gap-3">
            <div className="text-sm ">
              <p className="text-sm font-bold">The Bible Teaching</p>
              <p className="">
                We believe that the entire Scripture, both Old and New Testament
                are written by the inspiration of the Holy Spirit – II Tim.
                3:16-17. All the Christian teachings and the Christian attitude
                of the Children of God are such as are established in the Holy
                Bible – II Tim. 3:10-15; II Peter 1:21; John 17:17; Ps. 119:105.
              </p>
              <p className="">
                We believe that the Bible is the written and revealed Will of
                God. Man’s position to God, the way to obtain salvation, woe and
                destruction awaiting sinners that refuse to repent and
                everlasting joy that is kept for the born again souls. All the
                Bible teachings are holy, what the Bible reveals as the will of
                God are such that we should accept, and whatever God writes in
                the Bible and His Law are to remain unchangeable; for the
                Heavens and Earth may pass away but the Word of God stands
                forever. Deut. 4:22; Rev. 22:18, 19; Matt. 24:34-38.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                About God: <span className="font-[400]">Ps. 33:6-9</span>
              </p>
              <p className="">
                As revealed unto us by the Bible, we believe that there is only
                one God, Who is the Creator of both visible and invisible
                creatures -Gen. 1:1; Ps. 86:9-10; Is. 43:10-11; John 1:1-3. Only
                God will be in existence forever. Ez. 3:14; in God every
                creature receives life -John 5:26.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About Jesus Christ</p>
              <p className="">
                We believe that He is the Son of God; Who took away our sins,
                and the Saviour of the world. We also believe that Jesus is God
                and was born by Mary the Virgin. He is God revealed in the
                flesh. Through Him all things were created. John 1:1-14; John
                14:9; Matt. 1:18-25, Is 9:6; Is 53:5-6. We believe in His death
                on the Cross, and resurrection, by which He brought redemption –
                Is. 53:4-10; I Pet. 2:24; John 10:11; Gal. 3:13, Matt. 20:28; I
                Cor. 15:3; Rom. 4:25; II Cor. 5:14; Heb 2:9; Heb 9:26.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About the Holy Spirit</p>
              <p className="">
                The Holy Spirit is the third Person in the TRINITY. He has the
                same power, the same glory with God the Father and God the Son –
                John 14:16-17; John 15:26; Matt. 3:16; Acts 13:24. He is one
                with Father and the Son who is to be worshiped and served. Three
                Persons that become one are the source of blessings to all the
                living creatures in Heaven and on earth – Matt. 28:19; II Cor.
                13:14; I John 1:5-7. The Holy Spirit has a great work to
                perform. He Teaches, He Speaks to men, and bears witness in us –
                Acts 16:6-7; He performs the work of regeneration for man- John
                3:5-6; He also performs the work of Sanctification in the born
                again souls until they are fully sanctified – John 16:8; Eph
                1:17-19; II Thess. 2:13; I Cor. 6:11. This same Holy Spirit
                endows believers with gifts they can use – I Cor 12:7; He
                empowers one in the Lord. Acts 1:8.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About the Trinity</p>
              <p className="">
                The egg is comprised of three parts: The yellow yolk, the
                whitish part, and the shell. Despite these three (3) substances,
                the egg is not three but one. Likewise, we believe that God the
                Father, God the Son, and God the Holy Ghost are one God, but
                made of three persons – hence they are ONE IN TRINITY – Gen.
                1:16-29; Matt. 3:16-17; Matt. 18:19.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About the Devil</p>
              <p className="">
                We believe that there is a devil, who seeks the down fall of
                every man. He brought sickness, sin and death into the world.
                Gen. 3:1-16. He seeks the destruction of those who exercise
                their faith in the Lord Jesus. Matt. 4:1-11; James 4:7; I Peter
                5:8. The devil has several unclean spirits over whom he governs
                – Matt. 12:24. A time would soon come when he shall be thrown
                into the pit and chained for one thousand years- Rev. 20:7-9.
                After this, he will be put into the lake of fire where he will
                remain suffering together with his followers for ever and ever.
                Rev. 20:10
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About Man</p>
              <p className="">
                Things He created. Gen. 1:26. God formed man of the dust of the
                ground and breathed into his nostrils the breath of life, and
                man became a living soul – Gen 2:7. Therefore man is of three
                parts, namely body, soul and spirit. Man is God’s ambassador on
                earth to take control over all other creatures on His behalf on
                earth. Gen. 1:26-28. God allows man to take part in His work and
                thereby reveal His love for mankind more than any other
                creatures – Gen. 2:15. This also shows how God elevates man more
                than the other creatures upon the earth.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Repentance unto God</p>
              <p className="">
                Repentance is the sorrow of a godly man for his sins with
                decision to abstain from them – Acts 3:19; 20:21; II Cor. 7:10;
                Mark 1:15; Is. 55:7; II Chron. 7:14; Ezek. 18:21.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Justification or New Birth</p>
              <p className="">
                This is God’s grace whereby we are cleansed from our sins by
                which we are able to stand before God as though we have never
                sinned. Acts 13:39; Rom. 3:25-26; Rom 5:1; I Cor. 6:11; Gal.
                3:24; John 1:12-13; 3:3; II Cor. 5:9; Titus 3:5; I Peter 1:23;
                Acts 10:43; John 3:3,5.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Sanctification (Holiness)</p>
              <p className="">
                Sanctification is another grace of God by which our souls are
                progressively and completely cleansed. This is the second
                accomplishment of the grace which through our faith in the Blood
                of Jesus Christ is wrought after we have been justified and free
                from our sins or regenerated – John 17:15-17; I Thess. 4:3; Heb.
                2:11; 12:14; 13:12; I John 1:7; Luke 1:74, 75; II Cor. 7:1; I
                Peter 1:16; Eph. 5:25-27; I Thess. 5:23-24; II Thess. 2:13.
              </p>
            </div>
            <div className="text-sm  flex flex-col gap-3">
              <p className="text-sm font-bold">Water Baptism</p>
              <div className="">
                <p className="text-sm font-bold">A. The Kinds of Baptism</p>
                <p className="">
                  We believe in baptism by the Name of the Father, the Son and
                  the Holy Ghost – Matt. 28:19. The teaching is revealed in the
                  New Testament and all Christians must obey this rule of the
                  Lord – Acts 2:24; Acts 16:15; Acts 18:8; Acts 19:4-5. Every
                  saved soul automatically qualifies for Water Baptism – Acts
                  8:29-39; 16:18-23.
                </p>
              </div>
              <div className="">
                <p className="text-sm font-bold">B. Baptism by Trinity</p>
                <p className="">
                  We believe that all members of this Church should receive
                  immersion Water Baptism, in the Name of the Father, Son, and
                  Holy Ghost, as believers who would not add to, or take out of
                  the Word of God. Matt. 28:19.
                </p>
              </div>
              <div className="">
                <p className="text-sm font-bold">
                  C. The Reason for Water Baptism
                </p>
                <p className="">
                  Water Baptism stands for a sign and an example of two things.
                </p>
                <p className="">
                  It is an outward sign, an example of a true repentance of a
                  sinner from his or her sins. Acts 2:38; Acts 22:6 Anybody who
                  is baptized is joined with Christ in His death, burial and
                  resurrection – Rom. 6:1 – 23; Col. 2:113. Therefore anybody
                  baptized is dead to the world and the evils thereof – Gal.
                  6:14.
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Baptism of the Holy Spirit</p>
              <p className="">
                All born-again souls should ask for the Holy Spirit from above,
                as the Apostles were ordered to wait in Jerusalem until they
                were filled from above. It is the promise of the Father. It is
                God’s gift which He gives to those who obey Him – Luke 24:49;
                John 4:14-26; Acts 1:4-5; Acts 5:32; Acts 8:14-17. It is God’s
                promise unto those who are far and all whom the Lord shall call
                – Acts 2:38-39. Any Christian who receives the baptism of the
                Holy Spirit must speak in tongues – Acts 2:4; Acts 10:34-36;
                Acts 19:2-6.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About Prayer</p>
              <p className="">
                A Christian without condemnation of heart has a right to thank
                God and be in adoration and in prayer unto the Lord always –
                Zek. 12:10. His soul thirsts for God – Ps. 42:2. The Holy Spirit
                helps his infirmities in prayer – Rom. 8:26. We must pray only
                by the Name of JESUS – John 16:23; ; I Tim. 2:25. Without faith
                our prayer shall be powerless before God – James 1:6-8; Heb.
                11:6. Those who are unable to pray annoy God – Is. 42:22; Is.
                64:6-7. Much trouble and danger are encountered in the absence
                of prayer – Zeph 1:4; Dan 9:13-14; Hosea 8:13-14. We are
                commanded to pray and not to faint and to pray without ceasing –
                Col. 4:2; I Thess. 5:17; I Cor. 7:5; Luke 18:1. The Apostles put
                prayer first in their life and they spent much time in prayer –
                Acts 6:4; Rom. 6:4; Rom 1:9; Col. 1:9. It is God’s plan and
                order that we should pray to receive all the goods He has
                promised in His treasure for us – James 4:2; Dan. 9:3; Matt.
                7:7-11; Matt. 9:24-29; Luke 11:13.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About Restitution</p>
              <p className="">
                Restitution is a sign of true repentance. This is payment for
                what is damaged – Ez.. 22:3. Whatever cannot give us a clear
                conscience before man and God should be restituted without delay
                – Lev. 6:1-7; Luke 19:8; Prov. 28:13; Acts 24:16.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Divine Healing (Without Medicine)
              </p>
              <p className="">
                Healing without medicine is Biblical – Matt. 4:23; Ps. 103:3;
                Sickness is caused because of the fall of man. The force behind
                this is Satan – Job 2:1-9; Luke 13:15; Acts 10:38. But JESUS
                came to destroy the works of the devil – I John 3:8. Christ
                purchased our soul from the curse of sin. He bore our
                infirmities and carried our sorrow – Matt. 8:15-17. By His
                stripes we are healed. Is 53:4-5; Gal. 3:13; I Peter 2:24.
                Healing without medicine is of the Gospel – Matt. 9:35; Mark
                6:10-18. We read that the twelve Apostles and the seventy
                disciples combined healing with their Ministry of the Gospel –
                Luke 9:1-2; Luke 10:1-9. The Lord commanded us to go into the
                world, just to teach the nations alone, but that we should also
                heal the sick – Matt. 28:19-20; Mark 10:1, Mark 16:15-18.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                We could obtain our healing in these four ways:
              </p>
              <p className="">By individual prayer – John 14:13-14.</p>
              <p className="">
                By two people (or a group of people) who have agreed to pray by
                faith – Matt. 18:19-20.
              </p>
              <p className="">
                By the laying of hands on the head – Mark 16:18; Acts 9:18; Acts
                28:8.
              </p>
              <p className="">
                By the Ministry of the Elders, anointing the sick with prayer of
                faith – James 5:14-15.
              </p>
              <p className="">
                Special Notice – Before we can work by healing without medicine,
                we would have sanctified our life to the doing of the Law – Rom.
                6:13, 19; Rom. 12:1; Matt. 16:24; II Cor. 8:5, 15. Many miracles
                were performed by the Apostles – Acts 9:33-42; Acts 19:11-12;
                Acts 28:8-9.{" "}
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Worldliness Forbidden</p>
              <p className="">
                The Bible teaches us to abstain from all appearance of evil – I
                Thess. 5:22. “But follow after righteousness, faith, love,
                purging ourselves from unclean things so that we may be vessels
                unto honour, sanctified, and prepared unto every good work” – II
                Tim. 2:21-22. Therefore we must not see our Church members in
                dancing halls, or cinema halls, revelling, for such things are
                works of the flesh. All people doing such things shall not
                inherit the kingdom of God – Gal 5:19-21; I Peter 4:3-4; Prov
                31:4-5; Rev. 1:5-6; Gen 19:30-38.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Swearing and Cursing Forbidden
              </p>
              <p className="">
                All Christians should not swear or curse or blaspheme for we
                were not taught of Jesus in such a way. “Bless, and curse not”
                Rom. 12:14. Swear not at all, neither by Heaven, nor by the
                earth or any other swearing. But let your yes by yes, and No be
                No so that you do not run into condemnation – Matt. 5:34; James
                5:12.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Due Reverence to Parents and Authorities
              </p>
              <p className="">
                All Christians are to obey the law of the country, obey the
                government and authority. They should honour their parents and
                elders. I Peter 2:13-14; Rom 13:1-5; Eph. 6:1-3.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Rebellion Against Church Authority Forbidden
              </p>
              <p className="">
                Rebellion against Church Ministers is against the Will of God.
                Those who rebelled against Moses did not escape unpunished – Num
                12:1-10; Num. 16:1-4,32. The Bible teaches that we should obey
                our Spiritual leaders and submit to them – Heb 13:17; Joshua
                1:16-18.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Debts Forbidden</p>
              <p className="">
                Any member of this Church must not will fully enter into any
                debt which he finds difficult to repay for the Bible teaches us
                “owe no man anything, but to love one another” – Rom. 13:7-8.
                About Debt: 1. Monetary Debt 2. Debt of promise or Vow – Ps.
                105:8 3. Debt of time – Eccl. 3:1-8 4. Debt of not preaching the
                Gospel – I Cor. 16-17.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Our Garment</p>
              <p className="">
                We believe that any born again soul is a child of God and is
                clothed with white garment which is the Righteousness of Christ.
                It is received freely, a gift unto them that lead a victorious
                life – Rev. 19:7-8. Furthermore, we are advised to put on
                charity, which is the bond perfectness – Col. 3:13-14. It is not
                our policy to have special robes. We believe that all members
                must be moderate in adornment. “Not with braided hair, or gold
                or pears, or costly array, but let it be the hidden man of the
                heart, in that which is not corruptible, even the ornament of a
                meek and quiet spirit, which is in the sight of God of great
                price” I Tim. 2:8-9; I Peter 3:1-6; Gen. 35:1-4; Ex. 32:1-8.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Laying of Hands and Anointing the Sick
              </p>
              <p className="">
                We believe in the laying on of hands and anointing the sick on
                the head in the Name of the Lord and that prayer of faith shall
                save the person – James 5:14-16; Mark 16:17-18. But we do not
                use any other methods which are not according to Bible teaching
                such as sanctification of water for the sick to drink, or to
                perform special washing for the sick in the flowing river, the
                use of robe or garment, or to carry a small stick in the form of
                a cross ones person or the use of candles and such things. They
                are not Biblical. The order of our Lord is that we should heal
                the sick free of charge – Matt 10:8. We do not receive money or
                charge money before we offer prayer for anybody. All those using
                the above materials for healing shall perish with them – Mark
                16:18; James 5:14; Matt 10:7-8; Mark 6:13.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Holy Matrimony</p>
              <p className="">
                Marriage is honorable in all – Heb. 13:4. Therefore all members
                who wish to marry could do so in the church. They are not to
                follow the worldly pattern with drumming and dancing,
                drunkenness or wear clothes that revealing: Jer. 4: 30-31; I
                John 2:15-17; Rom. 12:2.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Prophecy in the Church</p>
              <p className="">
                We believe in all the prophecies in the Bible; likewise we
                believe that we can be given the gift of prophecy by the
                inspiration of the Holy Spirit – I Cor. 14:29. Despise not
                prophesying – I Thess. 5:20. But any prophecy that is against
                the Bible is rejected.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Church Discipline</p>
              <p className="">
                Above all, whatever is not Bible teaching should be ignored
                entirely by all members. If there be found any member disobeying
                these teachings he may be disciplined privately, but if any
                backslider would not admit discipline and restitute his way, he
                may be disciplined openly as it is written in Matt. 18:15-18, So
                that truth might be established by the witness of two or three
                according to the Word of God. Rebuke them that sinned before all
                that others also may fear – I Tim. 5:20; I Cor. 5:1-13; II Cor.
                2:6-11; Heb. 12:5-12.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                One Husband, One Wife, Correct Divorce and Re-Marriage
              </p>
              <p className="">
                The Word of God teaches us that monogamy has been the order
                since the beginning of the Law of Christ. Divorce is permissible
                only when a life partner has committed adultery. Even then,
                neither of the two should be married to a new partner while both
                are yet alive – Matt. 5:31-32, 19:9; Mark 10:11-12; Luke 16:18;
                Rom. 7:2-3; Mal. 2:13-16; Gen. 2:18: Matt. 19:4-6.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Holy Communion or the Lord’s Supper
              </p>
              <p className="">
                It is instituted by our Lord Jesus Christ shortly before His
                death. He commanded all Christians to gather together regularly
                to share the bread and wine till He comes back again – Luke
                22:17-20; Matt. 26:26-29; Mark 14:22-25; I Cor. 10:18, 21; Acts
                2:42; 20:7; I Cor. 11:23-30.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Church of God</p>
              <p className="">
                The born-again souls are called the Church of God – Eph. 1:22;
                Col. 1:1-18; Eph 3:10; 5:24-29. The assembly of the believers,
                the sanctified souls in Christ Jesus, Those who we call the Holy
                people of God – I Cor. 1:2; Acts 14:23; Phil. 4:15; Acts 13:28.
                Therefore all that God has called to gather together in a place
                and fed with the Word of God – Acts 2:41-47; They accept Christ
                as the head of the Church. They gather from time to time to
                worship God in truth and Spirit to share the bread and eat.
                Their major assignment is to spread the Gospel of Christ to all
                Nations – Matt. 28:19.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Dedication or Separation</p>
              <p className="">
                Dedication is very important for the children of God for the
                Lord is Holy – John 17:19; I Peter 1:15-16. If we want god to be
                our Father, we must separate and dedicate ourselves unto God –
                II Cor. 6:17-18. God called us unto Holiness – I Thess. 4:7;
                Rom. 12:1-2.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Dedicated Christian</p>
              <p className="">
                The dedicated Christian would avoid foolish talking or jesting,
                Eph. 5:4. He or she would not wear clothing of the opposite sex,
                Deut. 22:5. Marriage would be esteemed honorable in all respects
                in the life of the dedicated Christian, and he or she would be a
                hearer as well as a doer of the Word of God at all times.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Dead in Christ</p>
              <p className="">
                We believe that a brother who sleeps in the Lord is with Christ
                already – Phil. 1:21-23; I Cor. 5:1-9. Paul said that it is
                better to come out of this flesh and be with the Lord forever in
                our Heavenly home. Further still he emphasizes that ” But I
                would not have you to be ignorant brethren concerning them which
                are asleep that ye sorrow not even as there which have no hope”
                I Thess. 4:13-18. Therefore all members should separate
                themselves form the things of this world in worshiping the dead
                by which we become idolaters – Deut 14:1.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Resurrection</p>
              <p className="">
                We experience daily the resurrection of the Spirit, all the
                born-again souls who are passed from death to life – Eph. 6:14;
                Rom 6:11; John 5:20. As this body is dissolved, immediately we
                are entering into our Heavenly Home or house not made with hands
                eternal in the Heavens – I Cor. 5:1-8 There is resurrection of
                the Body. Jesus taught us plainly that the buried body will be
                raised up from the tomb at the last day Job 5:28-29. Paul also
                explained this to us – Acts 24:15; I Cor. 15:22, 42-44; Phil.
                3:21; Dan. 12:2. Only Holy people will be at the resurrection
                those who belong to Jesus when He appears; but the sinners shall
                resurrect in hell, a place where people whose names are not
                found in the Lamb’s Book – Rev. 20:4-5; John 5:28-29; Rev.
                20:12-15.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Second Coming of Christ</p>
              <p className="">
                The Second coming of Jesus Christ will be in physical form and
                will be visible to all in like manner as He was seen ascending
                up to heavens – Acts 1:9-11; John 14:3. His return will be in
                two stages:
              </p>
              <p className="">
                Christ’s Return in the Sky – The Saints or Bride of Christ will
                be raptured to meet Christ in the sky – I Thess. 4:15-17; I Cor.
                15:51-52; Matt. 24:40-44; Matt 25:10
              </p>
              <p className="">
                His Return to the Earth – He will return to the earth to judge
                the sinners and the ungodly – Rev. 19:19-21; II Thess. 1:7-10;
                Jude 1:14-15; Zech. 14:3-4.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Tribulation Period</p>
              <p className="">
                The time between His coming to receive the brides or saints into
                heaven and His coming to administer judgments will be the time
                of Tribulation – Matt 24:21; 22:29; Rev. 9; Rev. 16; Is.
                26:20-21; Mark 13:19; Jer. 30:7; Daniel 12:1; Malachi 4:1.
              </p>
              <p className="">
                The Millennial Reign (Christ’s 1,000 Year’s Reign) After Christ
                appears upon earth, He would set up His Kingdom with the Holy
                people for one thousand years – Rev. 20:1-6; Rev. 2:26-27. These
                one thousand years will be entirely different from any kingdom
                ever set on earth.
              </p>
              <p className="">The Kingdom is peace all over – Is 65:18-20.</p>
              <p className="">There will be no death – Is. 65:18-20.</p>
              <p className="">
                There will be no poverty – Mich. 4:4; Is. 65:21-23;
              </p>
              <p className="">
                Christ is the ONLY KING in the Kingdom – Dan. 2:44-45; Dan.
                7:13,14,22,27.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Satan in Prison</p>
              <p className="">
                At this time – millennium, Satan will be chained – Rev. 20:2-3,
                and it will be the time of peace and blessing to mankind also –
                Is. 11:6-9; 65:25; Hosea 2:18; Zech 14:9-20; Is 2:2-4.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Coming Judgments</p>
              <p className="">
                We believe that there will be three special judgments.
              </p>
              <p className="">
                The Judgment of the Believers: This would start immediately
                believers are caught up in the sky, they shall stand before
                Christ. After this judgment they will descend down with Christ
                upon the earth – II Cor. 5:10; I Cor. 3:3; 11-15; James 1:12;
                Rom 2:16.
              </p>
              <p className="">
                The Judgment of the Nation: This will be the time when Jesus
                appears upon earth between the millennial reign and final
                judgment. Acts 17:31; Joel 3:2; Ez. 14:15; Jud. 1:14-15; II
                Thess 1:7-10; Rom 2:16; Rev. 1:7; Mal. 16:21.
              </p>
              <p className="">
                The Judgment of the Unbelievers: or the White Throne Judgment:
                This will happen after Christ’s one thousand years reign at the
                White Throne. – Rev. 20:11-15; II Peter 3:7; Dan. 12:2.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">New Heaven and New Earth</p>
              <p className="">
                The Word of God teaches us that after judgment, this wicked
                world will be removed. God will create a new Heaven and a new
                earth in which HOLINESS will exist – Matt. 24:35; II Peter
                3:12-13; Rev. 21:1-3; Is. 65:17:; 66:22
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Eternal Life and Eternal Punishment
              </p>
              <p className="">
                The Bible teaches us that there is eternal punishment as well as
                eternal life – Matt. 25:46. The wicked people will be sent to a
                fiery hell made of sulphur, to be tormented both day and night.
                The punishment will continue forever and ever – Rev. 14:10-11;
                Luke. 16:24; Mark 9:43-44.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Dedication of Children</p>
              <p className="">
                We believe that after a child is b orn on the 8th day, the
                parent should bring him/her unto the House of the Lord for
                dedication unto the Lord – 1 Sam. 1:22; Luke. 22:22-24; Matt.
                19:13-15.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Lord’s Day</p>
              <p className="">
                We believe that the first day of the week called Sunday is a
                special day which the believers should separate as the Lord’s
                day during which time are to gather to worship – Acts 20:7;
                1Cor. 16:2; Rev. 1:10. The Lord resurrected on the first day of
                the week – Mark 16:9; Ezek. 31:12-14.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col gap-3 my-5 ">
                <p className="text-xl md:text-3xl lg:text-4xl ">OUR MISSION</p>
                <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <p className="text-sm tracking-wider">
                Our vision is exactly the same as those of The Redeemed
                Christian Church of God. They are as follows:
              </p>
              {list.map((item, index) => (
                <div
                  className="flex gap-2 text-[#333333] items-center"
                  key={index}
                >
                  <LuCheckCheck className="w-[10%]" />
                  <p className="text-sm w-[90%]">{item}</p>
                </div>
              ))}
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-3 my-5 ">
                <p className="text-xl md:text-3xl lg:text-4xl text-center ">
                  COME AS YOU ARE
                </p>
              </div>
              <div
                className="w-full h-[300px] overflow-hidden"
                style={{
                  borderRadius: isHovered
                    ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                    : "64% 36% 78% 22% / 16% 76% 24% 84%",
                  transition: "ease-in-out 1s",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={
                    "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/men.gif"
                  }
                  alt="historyPix"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
