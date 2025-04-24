"use client";
import React from "react";
import Link from 'next/link'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrLicense } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/router';


export default function BureauContent() {
    const [isExecutiveSummaryVisible, setExecutiveSummaryVisible] = useState(true);
    const [isMetaphysicsVisible, setMetaphysicsVisible] = useState(true);
    const [isContentVisible, setContentVisible] = useState(true);
    const [isImageSourcesVisible, setImageSourcesVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal, { passive: true });

        // Trigger reveal on initial load
        reveal();

        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    const showExecutiveSummary = () => {
        setExecutiveSummaryVisible(!isExecutiveSummaryVisible);
    }

    const showMetaphysics = () => {
        setMetaphysicsVisible(!isMetaphysicsVisible);
    }

    const showContent = () => {
        setContentVisible(!isContentVisible);
    }

    const showImageSources = () => {
        setImageSourcesVisible(!isImageSourcesVisible);
    }

    const redirectTo = (url) => {
        router.push(url);
    }


    return (
        <div className="container">
            <h2>Preface</h2>
            <div className="row just ">
                <div className="col-md-4 col-12">
                    <div className="d-flex flex-row">
                        <FaMagnifyingGlass className="mt-1" />  <h4 className="ms-2">Purpose</h4>
                    </div>
                    <br />
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i>This website exists primarily to act as a ‘bible’ for the lore I’ve generated over the last few years, and in order to present my lore in an easy to access format that is neutral and not based on Max Barry’s Blackberry. In addition to that, written down and such is not subject to the gaslighting machine known as my memory. </i>
                </div>
                <div className="col-md-4 col-12">
                    <div className="d-flex flex-row">
                        <GrLicense className="mt-1" /> <h4 className="ms-2">Licence</h4>
                    </div>
                    <br />
                    <i>As this is a public website, some legality. This is released under the CC BY-SA 4.0 Licence. Feel free to yoink, remix, deface, and copy as long as you credit me as the original yoinker, remixer, defacer, and copier.  In other words, go nuts.</i>
                </div>
                <div className="col-md-4 col-12">
                    <div className="d-flex flex-row">
                        <FaRegLightbulb className="mt-1" /> <h4 className="ms-2">Inspirations</h4>
                    </div>
                    <br />
                    <i>My Little Pony: Friendship is Magic, Equestria Noir, Ponyville Noire, Starlight over Detrot, Rimworld, Equestria at War,  SCP Foundation, A History of Modern Indonesia Since c. 1200, Homo Deus: A Brief History of Tomorrow, Yes Minister, Warhammer 40k, America Against America, Human History</i>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="align-items-center justify-content-center col">
                <div className="container d-flex px-5 content-justify col-md-9 col-12">
                    <h2 className="me-5 clickable" onClick={showExecutiveSummary}>Executive Summary</h2>  <h2 className={`rounded-5 px-3 ${isExecutiveSummaryVisible ? "show" : "hide"}`} >&gt;</h2>
                </div>
                <div className="quote mx-auto d-flex flex-column container px-5 col-md-8 col-12">
                    <p><i>"The difference between savages and us, is that we write down our atrocities."</i></p>
                    <p className="text-end px-5 mx-5">- Minister of Culture Illicit Winbreaker, 1432 ALB</p>
                </div>
                <div id="intro-paragraphs" className={`container px-5 content-justify col-md-9 col-12 my-1 mb-2 ${isExecutiveSummaryVisible ? "showable" : "hideable"}`}>
                    <p style={{ "text-align": "justify" }}>
                        In a dimly lit room once upon a time in the eleventh century, the city of Xiahe slept as ten people gathered together. A human, a dimadas, a himadas, an einhorn, a schlagerite, a bianxingling, a griffef, a hiplegref, a heima, and a qirin gathered to talk and plan for the future of their world. A world where the wars would end, the world where they could spread true harmony and peace. To unite the world under their benevolent rule.
                    </p>
                    <p style={{ "text-align": "justify" }}>
                        To be sapient in these times is to live under a regime that struggles to properly handle its duty in serving all that live under its supposed domain. As under it lies a multitude of polities, interest groups, warring factions, and ideological schisms on top of the contradictions of an Empire proclaiming to bring harmony to all. The noosphere of existence is rife and ripe with chaos as the Empire struggles to keep itself together to fullfill its founders goals.
                    </p>
                    <p style={{ "text-align": "justify" }}>
                        It is the twenty fourth century, and their plan has succeeded. <i>The Federal Commonwealth of the Empire of Minean and Perdeland, Hiplegref Queendom, Kristal Diguo, Associated States of Griffefkind, Zongmao Federated Republic, Qirine Diguo, Bianxingling Federal State, and Constituent States of the Continents of Sejukland, Minea, Legti, Madi, and Pohoska</i> rules over their homeworld and six hundred and thirty more under their flag.
                    </p>
                    <p style={{ "text-align": "justify" }}>
                        The Federal Commonwealth of the Empire is a waking contradiction, and yet, despite it all, <strong>it still lives.</strong>
                    </p>
                    <p style={{ "text-align": "justify" }}>
                        Praise be the Pen and the Bureaucrat, for in the Twenty Fourth Century, they are the weapon and soldier of change.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <div className="container px-5 content-justify col-md-9 col-12 mt-2 reveal">
                    <div className="container d-flex  content-justify col-12">
                        <h2 className="me-5 clickable" onClick={showMetaphysics}>Metaphysics</h2> <h2 className={`rounded-5 px-3 ${isMetaphysicsVisible ? "show" : "hide"}`} >&gt;</h2>
                    </div>
                    <div className="quote mx-auto d-flex flex-column container col-md-10 col-12">
                        <p><i>He waved his hand around to the surroundings. ‘There's a difference between the Narrative and the Narrator. The people writing us are Narrators, but so are we.’</i></p>
                        <p className="text-end px-5 mx-5">- I.H. Pickman's Proposal, SCP-001, SCP Foundation</p>
                    </div>
                </div>
                <div id="metaphysics-travel-wrapper" className="reveal">
                    <div id="metaphysics-paragraphs" className={`container px-5 content-justify col-md-9 col-12 my-1 mb-2  ${isMetaphysicsVisible ? "showable reveal" : "hideable"}`}>
                        <div className="row d-flex">
                            <div>
                            </div>
                        </div>
                        <h3>Worlds and Timelines</h3>
                        <p style={{ "text-align": "justify" }}>
                            The world of Bureaucracy Manifest is a world wherein travel between timelines are possible. And first off this issue needs to be made clear and well first and foremost.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            ‘Worlds’ and ‘Timelines’ are interchangeable in this canon. And they are simply other dimensions in which a different historical event occurred.
                        </p>
                        <div className="container px-5 content-justify col-9 my-1 mb-2 d-flex justify-content-center align-items-center">
                            <Image
                                className="mx-auto"
                                width={320}
                                height={300}
                                src={"/images/charts/axis1.png"}
                                alt="Axis Chart 1"
                            />
                        </div>
                        <p className="footnote " style={{ "text-align": "center" }}>
                            Figure 1.1 - 2D Axis Chart of Worlds
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            To simplify it, worlds can exist on two axes first and foremost that are relative to which world you are measuring from. The X axe in the chart apart represents the choice axis. This axis measures the difference in choices being taken within that world compared to the relative origin point. In our above graphic, the orange dot can be taken to be the world similar to the red origin point, but in it several choices were noticeably different. It might be that in orange everybody drives on the right side of the road and all left side drivers are insane lunatics. Or that transistors were never invented and thus we went full in on vacuum tubes.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            Thus, the ‘x’ axis is where all the alternate timelines exist. Like the usual what if JFK wasn’t assassinated timeline, the what if agriculture was invented two thousand years later timeline, or the what if humans didn’t evolve into the primary species and instead dogs did.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            The y axis meanwhile, is the rules axis. In essence, it describes how complex the world’s rules are. The more complex they are, the harder they are to violate. And the less complex they are the easier they are to violate. With the idea being that the more complex the world’s rules, the more edges cases are snuffed out and in simpler rules anything can be done as long as the basic rules are fulfilled.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            Despite intuition, magic is not unique to one end of the spectrum, and magic can appear in simple worlds and also in complex worlds. Since the creation of magic is dependent on the way the world was created. Which creates the observation that worlds are a function of their choice axis.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            Now, that is the basic understanding, however because of the author’s idiosyncrasies its actually three axes.
                        </p>
                        <div className="container px-5 content-justify col-9 my-1 mb-2 d-flex justify-content-center align-items-center">
                            <Image
                                className="mx-auto"
                                width={320}
                                height={300}
                                src={"/images/charts/axis2.png"}
                                alt="Axis Chart 2"
                            />
                        </div>
                        <p className="footnote " style={{ "text-align": "center" }}>
                            Figure 1.2 - 3D Axis Chart of Worlds
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            The Z-axe is the meta axis. It essentially describes how real that reality really is. As in, the worlds above others in the z-axis, sees the other worlds as fiction. Meaning that narrative rules and tropes apply themselves more and more the lower down you go. Of course, the people in them have free will, but tropes tend to occur more and more until at the very bottom where tropes dominate the world as a whole that no real free will exists.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            But going up the Z-axe also has a perverse side effect of limiting the full range of how far on the X and Y axes you can go. In effect creating a range of reality like so.
                        </p>
                        <div className="container px-5 content-justify col-9 my-1 mb-2 d-flex justify-content-center align-items-center">
                            <Image
                                className="mx-auto"
                                width={420}
                                height={400}
                                src={"/images/charts/axis3.png"}
                                alt="Axis Chart 3"
                            />
                        </div>
                        <p className="footnote " style={{ "text-align": "center" }}>
                            Figure 1.3 - The "Range" of Reality
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            What this creates is a ‘cone’ of possible existence. More accurately a elliptic paraboloid where the zone of possible worlds is described as
                        </p>
                        <MathJaxContext>
                            <div style={{ textAlign: "center", margin: "20px 0" }}>
                                Zone of Possible Worlds = <MathJax inline>{"\\(\- \\frac{x^2}{a^2} \- \\frac{y^2}{b^2} \+c\\)"}</MathJax>
                            </div>
                        </MathJaxContext>
                        <p style={{ "text-align": "justify" }}>
                            Worlds that stretch out more into the x and y axes but are high up in the z axes, such as the red dot in our above graphic, can only exist for a microsecond before being destabilised and vanishing into dark energy.                     </p>
                        <p style={{ "text-align": "justify" }}>
                            From this, you can infer that worlds up in the Z-axis, create worlds down below. If you write a story, you create a world down below. The Zone of Possible Worlds isn’t so much a hard rule of reality as it is the ability of readers to suspend their belief in reading the newly created world. Ideas within lower Z-level worlds are echoes of those from the worlds above, easily being misconstructed as a ‘realm of ideas’ which is used to project their world into existence by lower dwelling people.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            Thus, this is the reality within Bureaucracy Manifest. You have three axes of choice, complexity, and meta. One determines what happens, one determines what toys you get to play with, and one determines if it's even real.
                        </p>
                    </div>
                    <div id="travel-paragraphs" className={`container px-5 content-justify col-md-9 col-12 my-1 mb-2  ${isMetaphysicsVisible ? "showable reveal" : "hideable"}`}>
                        <h3>Travel Between Worlds</h3>
                        <p style={{ "text-align": "justify" }}>
                            The Federal Commonwealth is connected by the various portals that allow transport in between the various worlds of the Empire. These portals function by finding a common link between worlds, and utilizing that in order to craft a permanent link in between them.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            In effect, the method in which it is done is by effectively creating a link between the two worlds that make them function as one. The ‘Anchoring’ of the worlds is conducted by effectively jettisoning as much ‘metadata’ attached to an object regarding world A into world B. This is followed up by trying to extract that ‘metadata’ as that object still exists in world B, and if it still can be extracted, thus a method of transportation between the two should be feasible, as thus a method of transportation in between them will be created. This is usually done by trying to use thaumaturgical methods to “recall” it back.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            The best explanation regarding this is to understand that the object being used as an anchor as a hook that is thrown to another world. If that hook is sufficiently strong enough to be pulled on by the rope attached to it,then they can pull the hook back using the rope. As such using that to pull the worlds close enough to create a permanent connection.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            The ‘anchoring’ takes the form of jettisoning a combination of a mathematical, physics, chemical, and biology books into the other world. This is in essence a forceful injection of foreign ‘data’ (the books themselves) into the other world, and a forceful injection of foreign ‘metadata’ (the concepts within said book - imaginary numbers, biochemistry). As the metadata is tied to the data and the way to ‘recall’ the book is to grab its metadata, if the data had been destroyed (per say a world had electrons be slightly denser)  the ‘anchoring’ would fail. But, if the metadata and thus the data and thus the books can be pulled back, it is possible to form a connection to the other world to be created through the consumption of high amounts of energy and esoteric thaumturgical practices.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            Once worlds are connected, it could be best described that it cannot be separated. As in this, the laws of each universe have tried to function with one another and began to adapt. Using another analogy, imagine it as installing modifications upon a program. With each modification made by a different programmer. With each modification added, lower modifications cannot be removed without removing higher modifications, and higher modifications cannot be removed as they have been integrated into the program. And would require disentangling the program to not use the programming from the higher modifications. Which in of itself is impossible as the program has been modified to use the higher modifications.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            Once connected, they are often now connected via a 'portal'. Easily thought of with synnoyms such as 'doorways', 'passages', and or 'breaches in reality', travelling between worlds become effectively as easy as walking in between worlds throgh designated 'portals'.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            These portals are held up through the usage of electricity. As even if the universes are connected, the energy required to traverse between them is still immense, as it is effectively 'teleportation'. Thus, in order to sustain the portal, it is required to be constantly fed energy. If not, the portal collapses into an infinitely small point.
                        </p>
                        <p style={{ "text-align": "justify" }}>
                            The immense power required to maintain such power, predisposes states to be the ones to maintain such endeavours instead of private individuals or corporations. As they often require multiple power plants to power and or a nuclear reactor to keep them in a stable and wide state.
                        </p>
                    </div>
                </div>
                <div className="container px-5 content-justify col-md-9 col-12 mt-2 reveal">
                    <div className="container d-flex  content-justify col-12">
                        <h2 className="me-5 clickable" onClick={showContent}>Table of Contents</h2>  <h2 className={`rounded-5 px-3 ${isContentVisible ? "show" : "hide"}`} >&gt;</h2>
                    </div>
                </div>
                <div id="index-wrapper" className="reveal">
                    <div id="index-paragraphs" className={`container px-5 content-justify col-md-9 col-12 my-1 mb-2 mt-5 ${isContentVisible ? "showable" : "hideable"}`}>
                        <div className="d-flex reveal clickable">
                            <Link href="./bureaumanif/constitution" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-1" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">Constitution</h3>
                                    <p className="black-text"><i>What self respecting nation does not have its own Constitution?</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/government" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-2" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text" >Government</h3>
                                    <p className="black-text"><i>No one rules alone. And the Federal Commonwealth's Government is far from lonely.</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/demographics" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-3" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">Demographics</h3>
                                    <p className="black-text"><i>People don't deserve to be put into a categorical box - but we'll do it anyways.</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/foreignrelations" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-4" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">Foreign Relations</h3>
                                    <p className="black-text"><i>No nation is an island. Unless of course, you are on an island.</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/armedforces" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-5" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">Armed Forces</h3>
                                    <p className="black-text"><i>A state is to have a monopoly on violence lest violence is imposed on it.</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/economy" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-6" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">Economy</h3>
                                    <p className="black-text"><i>Green Line go up and everyone celebrates, red line go down and everyone jumps.</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/culture" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-7" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">Culture</h3>
                                    <p className="black-text"><i>The first step to controlling your world is to control your culture. To model and demonstrate the kind of world you demand to live in. So cook your own damn food.</i></p>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex reveal">
                            <Link href="./bureaumanif/history" className="nav-link d-flex col-12 text-decoration-none">
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img className="mx-auto transp-8" width={300} height={100} src={"/images/grey-washed-wall.png"} alt="Flag" />
                                </div>
                                <div className="col-9 d-flex flex-column align-items-start justify-content-center mx-3 ps-5">
                                    <h3 className="black-text">History</h3>
                                    <p className="black-text"><i>That we do not learn very much from the lessons of history is the most important of all the lessons that history has to teach.</i></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <div className="container d-flex px-5 content-justify col-9">
                    <h6 className="me-5 clickable" onClick={showImageSources}>Image Sources</h6>  <h6 className={`rounded-5 px-3 ${isImageSourcesVisible ? "show" : "hide"}`} >&gt;</h6>
                </div>
                <div id="image-source-paragraphs" className={`container px-5 content-justify col-9  ${isImageSourcesVisible ? "showable" : "hideable"}`} >
                    <p style={{ "font-size": "0.8em" }}>
                        <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Bird_Feather_Feather_Paper_pen_Bird_feather_made_into_dipping_pen,_inkwell,_paper,_handwritten_letter,_inkblots,_etc._2505306_Edited_2020.jpg">Bird Feather Feather Paper pen Bird feather made into dipping pen, inkwell, paper, handwritten letter, inkblots, etc. 2505306 Edited 2020.jpg (www.mechanicalcaveman.com)</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Government_Buildings,_Dublin_2018-08-08.jpg">Government Buildings, Dublin 2018-08-08.jpg</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Questionnaire.jpg">Questionnaire.jpg</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Estonia_at_the_60th_Munich_Security_Conference_(53534413310).jpg">Estonia at the 60th Munich Security Conference (53534413310).jpg</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Military_vehicles_of_Azerbaijan_at_the_2020_Victory_parade_25.jpg">Military vehicles of Azerbaijan at the 2020 Victory parade 25.jpg</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Adjusted_net_savings_per_capita,_OWID.svg">Adjusted net savings per capita, OWID.svg</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:Gili_Meno_Island,_Nasi_goreng,_Fried_rice_with_juice,_Indonesia.jpg">Gili Meno Island, Nasi goreng, Fried rice with juice, Indonesia.jpg</Link>, <Link className="link-color-unique" href="https://commons.wikimedia.org/wiki/File:NYC_Public_Library_Research_Room_Jan_2006-1-_3.jpg">NYC Public Library Research Room Jan 2006-1- 3.jpg</Link>
                    </p>
                </div>

            </div>
        </div>
    );
}