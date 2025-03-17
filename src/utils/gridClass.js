const gridClass = (grid) => {
    switch (grid) {
        case 12:
            return "col-span-12";
        case 6:
            return "col-span-6";
        case 4:
            return "col-span-4";
        case 3:
            return "col-span-3";
        case 2:
            return "col-span-2";
        case 1:
            return "col-span-1";
        default:
            return "col-span-12";
    }
};

export default gridClass;
