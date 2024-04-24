type Project = {
    name: string;
    imageUrl: string;
    type: string;
    demoLink?: string;
};

type ProjectFilter = {
    name: string;
    by: string;
}

type SocialNetwork = {
    name: string;
    link: string;
    faIconClass: string;
}