const getUrlDashboard = (location) => {
    const pattern = location.pathname
        .split('/')
        .filter((item) => item !== 'dashboard' && item)
        .map((item) => ({
            link: `/dashboard/${item}`,
            name: item.charAt(0).toUpperCase() + item.slice(1),
        }));

    return pattern;
};

export default getUrlDashboard;
