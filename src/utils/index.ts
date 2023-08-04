type GraphQLFetcher = (query: string) => Promise<any>;
type FetchAsset = (id: string) => Promise<any>;

export const graphqlFetcher: GraphQLFetcher = async (query) => {
    const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API}`,
            },
            body: JSON.stringify({
                query,
            }),
        }
    );

    const { data } = await response.json();

    return data;
};

export const fetchAsset: FetchAsset = async (id) => {
    const { asset } = await graphqlFetcher(
        `{
            asset(id: "${id}") {
                url
                description
                width
                height
            }
        }`
    );

    return asset;
};
