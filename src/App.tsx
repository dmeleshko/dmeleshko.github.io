import type { Component } from 'solid-js';
import Circles from './components/Circles';

const App: Component = () => {
    return (
        <div class="cont">
            <div class="header">
                <div class="header__name">Dmitriy Meleshko</div>
                <div class="header__role">Senior/Lead developer</div>
                <div class="header_intro">
                    Enthusiastic and seasoned Backend Software Engineer with an impressive 15-year track record in the
                    IT field, with a strong focus on software development spanning over 8 years. My core expertise lies
                    in backend development, complemented by a deep understanding of network and system administration. I
                    thrive on tackling complex challenges and continually strive to expand my skillset. I also possess
                    some knowledge of the React framework, primarily in the context of using Next.js, though I consider
                    myself proficient rather than an expert in this area.
                </div>
            </div>
            <div class="sidebar">
                <div class="sidebar__section">
                    <div class="sidebar__section-title">Personal Info</div>
                    <div class="sidebar__section_personal-title">Location:</div>
                    <div class="sidebar__section_personal-content">Almaty, Kazakhstan</div>
                    <div class="sidebar__section_personal-title">E-mail:</div>
                    <div class="sidebar__section_personal-content">jobs@dmeleshko.dev</div>
                    <div class="sidebar__section_personal-title">Telegram:</div>
                    <div class="sidebar__section_personal-content">https://t.me/mitrio</div>
                    <div class="sidebar__section_personal-title">Social links:</div>
                    <div class="sidebar__section_personal-content">
                        <div>
                            <a href="#!">linkedin.com/in/dmeleshko</a>
                        </div>
                        <div>
                            <a href="#!">github.com/dmeleshko</a>
                        </div>
                        <div>
                            <a href="#!">hackerrank.com/mitrio</a>
                        </div>
                    </div>
                </div>
                <div class="sidebar__section">
                    <div class="sidebar__section-title">Main skills</div>
                    <div class="sidebar__list">
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">GoLang</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={5} total={5} />
                            </div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">TypeScript</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={5} total={5} />
                            </div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">Python</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={5} total={5} />
                            </div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">Linux</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={5} total={5} />
                            </div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">MySQL</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={5} total={5} />
                            </div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">MongoDB</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={5} total={5} />
                            </div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">PostgreSQL</div>
                            <div class="sidebar__list_item-description">
                                <Circles count={4} total={5} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebar__section">
                    <div class="sidebar__section-title">Additional skills</div>
                    <div class="sidebar__additional_skills">
                        <a href="#!" class="sidebar__additional_skills-item">
                            react
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            nestjs
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            nextjs
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            javascript
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            git
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            gitlab-ci
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            docker
                        </a>
                        <a href="#!" class="sidebar__additional_skills-item">
                            nginx
                        </a>
                    </div>
                </div>
                <div class="sidebar__section">
                    <div class="sidebar__section-title">Languages</div>
                    <div class="sidebar__list">
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">English</div>
                            <div class="sidebar__list_item-description">B2</div>
                        </div>
                        <div class="sidebar__list_item">
                            <div class="sidebar__list_item-title">Russian</div>
                            <div class="sidebar__list_item-description">Native</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <nav class="main__nav">
                    <div class="main__nav_menu">
                        <a class="main__nav_menu-item active" href="#!">
                            Experience
                        </a>
                        <a class="main__nav_menu-item" href="#!">
                            Education
                        </a>
                        <a class="main__nav_menu-item" href="#!">
                            Projects
                        </a>
                        <a class="main__nav_menu-item" href="#!">
                            ...
                        </a>
                    </div>
                </nav>
                <div class="main__experience">
                    <div class="main__experience_item">
                        <div class="main__experience_item-dates">2020&#8209;12 - present</div>
                        <div class="main__experience_item-role">Senior Backend Developer</div>
                        <div class="main__experience_item-company">
                            PS Internet Company (www.ps.kz), Almaty, Kazakhstan
                        </div>
                        <div class="main__experience_item-responsibilities">
                            Led the development and enhancement of domain registration and DNS management services for
                            the new user console (console.ps.kz). This included designing and implementing key features
                            to streamline user experiences and improve efficiency. Additionally, played a pivotal role
                            in the creation of essential microservices, such as a WHOIS server, RDAP server,
                            RDAP-bootstrap proxy service, and a self-hosted GeoIP API utilizing free geoip databases.
                            These initiatives greatly contributed to the platform's robustness, scalability, and overall
                            functionality, further solidifying its position in the market.
                        </div>
                        <div class="main__experience_item-stack">
                            <a href="#!" class="main__experience_item-stack-item">
                                TypeScript
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                React
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                NextJS
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Golang
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                MongoDB
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                PostgreSQL
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Gitlab
                            </a>
                        </div>
                    </div>
                    <div class="main__experience_item">
                        <div class="main__experience_item-dates">2019&#8209;12 - 2020&#8209;12</div>
                        <div class="main__experience_item-role">Senior Backend Developer</div>
                        <div class="main__experience_item-company">Sardina Systems, Remote Position</div>
                        <div class="main__experience_item-responsibilities">
                            I was responsible for supporting and expanding services within the FishOS infrastructure,
                            the company's all-in-one solution for deploying self-hosted OpenStack. This included
                            maintaining existing services and developing new solutions, particularly focusing on
                            resource planning and rebalancing strategies.
                        </div>
                        <div class="main__experience_item-stack">
                            <a href="#!" class="main__experience_item-stack-item">
                                Python
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Golang
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Linux
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                OpenStack
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Prometheus
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Gitlab
                            </a>
                        </div>
                    </div>
                    <div class="main__experience_item">
                        <div class="main__experience_item-dates">2018&#8209;05 - 2019&#8209;12</div>
                        <div class="main__experience_item-role">Senior Python Developer</div>
                        <div class="main__experience_item-company">Fortifier IT Company, Remote Position</div>
                        <div class="main__experience_item-projects">
                            <div>Projects:</div>
                            <div class="main__experience_item-projects-item">
                                Microsoft Teams Bot, moduleq.com (2018&#8209;05 - 2019&#8209;02)
                                <div class="main__experience_item-stack">
                                    <a href="#!" class="main__experience_item-stack-item">
                                        tornado
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        aiohttp
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        office365 API
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        spacy
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        celery
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        rabbitmq
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        jenkins
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        postgresql
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        mongodb
                                    </a>
                                </div>
                            </div>
                            <div class="main__experience_item-projects-item">
                                Book crowd-translating service, ellen4all.org, (2019&#8209;04 - 2019&#8209;06)
                                <div class="main__experience_item-stack">
                                    <a href="#!" class="main__experience_item-stack-item">
                                        django
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        postresql
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        celery
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        gitlab-ci
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        docker
                                    </a>
                                </div>
                            </div>
                            <div class="main__experience_item-projects-item">
                                Automatic customs taxes determination (2019&#8209;07 - 2019&#8209;10)
                                <div class="main__experience_item-stack">
                                    <a href="#!" class="main__experience_item-stack-item">
                                        django
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        postgresql
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        tesseract ocr
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        opencv
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        javascript
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        jQuery
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        jenkins
                                    </a>
                                    <a href="#!" class="main__experience_item-stack-item">
                                        docker
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main__experience_item">
                        <div class="main__experience_item-dates">2015&#8209;04 - 2018&#8209;05</div>
                        <div class="main__experience_item-role">Fullstack Web Developer</div>
                        <div class="main__experience_item-company">
                            PS Internet Company (www.ps.kz), Almaty, Kazakhstan
                        </div>
                        <div class="main__experience_item-responsibilities">
                            Responsibilities * Developed new features and addressed bugs within the enterprise billing
                            system. * Successfully designed and implemented new services and payment gateways. *
                            Collaborated with third-party APIs to enhance system functionality. * Led the transition of
                            the entire billing system to a microservices architecture, optimizing scalability and
                            efficiency.
                        </div>
                        <div class="main__experience_item-stack">
                            <a href="#!" class="main__experience_item-stack-item">
                                Python
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                PHP
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                JavaScript
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Flask
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                jQuery
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                VueJS
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Mysql
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                MongoDB
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Redis
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Bootstrap
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Git
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Jira
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Nginx
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                GitlabCI
                            </a>
                        </div>
                    </div>
                    <div class="main__experience_item">
                        <div class="main__experience_item-dates">2013&#8209;10 - 2015&#8209;03</div>
                        <div class="main__experience_item-role">System Engineer</div>
                        <div class="main__experience_item-company">PS Internet Company, Almaty, Kazakhstan</div>
                        <div class="main__experience_item-responsibilities">
                            Responsibilities: * Installed and administered Linux-based customer servers, ensuring
                            seamless operation. * Monitored and optimized the performance of over 100 customer servers,
                            ensuring high efficiency. * Analyzed and configured server settings to align with
                            customer-specific requirements, including high-load and high-availability setups. * Managed
                            the installation and administration of hypervisor systems, notably Proxmox, to facilitate
                            virtualization and resource allocation.
                        </div>
                        <div class="main__experience_item-stack">
                            <a href="#!" class="main__experience_item-stack-item">
                                Ubuntu
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                CentOS
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Debian
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Nginx
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Apache
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Php-fpm
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                uwsgi
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                mysql
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                icecast2
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                python
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                galera-cluster
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                mongodb
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                bash
                            </a>
                        </div>
                    </div>
                    <div class="main__experience_item">
                        <div class="main__experience_item-dates">2008&#8209;07 - 2013&#8209;09</div>
                        <div class="main__experience_item-role">System/Network Engineer</div>
                        <div class="main__experience_item-company">Fortebank Jsc, Almaty, Kazakhstan</div>
                        <div class="main__experience_item-responsibilities">
                            Responsibilities: Installed and configured Linux on new servers to ensure their proper
                            functionality. * Proactively monitored and maintained server efficiency, focusing on Linux
                            OS management. * Oversaw the monitoring of inter-branch communication channels, providing
                            vital support for the enterprise network. * Established and maintained network equipment for
                            company branches to facilitate seamless operations.
                        </div>
                        <div class="main__experience_item-stack">
                            <a href="#!" class="main__experience_item-stack-item">
                                RHEL
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Nginx
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Apache
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Mysql
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Squid proxy
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                DRBD
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                Cisco
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                DMVPN
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                BGP
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                OSPF
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                eIGRP
                            </a>
                            <a href="#!" class="main__experience_item-stack-item">
                                STP
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
