const errorOptions = {
    username: {
        required: "Username must be more than 1 characters",
        minLength: {
            value: 1,
            message: "Username must be more than 1 characters",
        },
        maxLength: {
            value: 32,
            message: "Username must be less than 32 characters",
        },
        pattern: {
            value: /^[\w]/,
            message: "Username must start with a letter, number, or underscore",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email",
        },
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Password must be more than 8 characters",
        },
        maxLength: {
            value: 32,
            message: "Password must be less than 32 characters",
        },
    },
    confirmPassword: {
        required: "Confirm Password is required",
        validate: (value, { password }) =>
            value === password || "Passwords do not match",
    },
    about_meta: {
        required: "About Meta is required",
        minLength: {
            value: 1,
            message: "About Meta must be more than 1 characters",
        },
        maxLength: {
            value: 32,
            message: "About Meta must be less than 32 characters",
        },
    },
    about_body_en: {
        required: "About (EN Language) is required",
        minLength: {
            value: 1,
            message: "About (EN Language) must be more than 1 characters",
        },
    },
    about_body_id: {
        required: "About (ID Language) is required",
        minLength: {
            value: 1,
            message: "About (ID Language) must be more than 1 characters",
        },
    },
    banner_name: {
        required: "Banner Name is required",
        minLength: {
            value: 1,
            message: "Banner Name must be more than 1 characters",
        },
        maxLength: {
            value: 32,
            message: "Banner Name must be less than 32 characters",
        },
    },
    banner_img: {
        required: "Banner Image is required",
    },
    start_date_banner: {
        required: "Start Date is required",
    },
    end_date_banner: {
        required: "End Date is required",
    },
    country_code: {
        required: "Country Code is required",
    },
    country_name: {
        required: "Country Name is required",
    },
    province_code: {
        required: "Province Code is required",
    },
    province_name: {
        required: "Province Name is required",
    },
    id_country: {
        required: "Country is required",
    },
    id_province: {
        required: "Province is required",
    },
    id_city: {
        required: "City is required",
    },
    office_name: {
        required: "Office Name is required",
    },
    address: {
        required: "Address is required",
    },
    ig: {
        required: "Instagram is required",
    },
    fb: {
        required: "Facebook is required",
    },
    city_code: {
        required: "City Code is required",
    },
    city_name: {
        required: "City Name is required",
    },
    x: {
        required: "X is required",
    },
    yt: {
        required: "Youtube is required",
    },
    nama_film: {
        required: "Film Name is required",
    },
    poster_film: {
        required: "Film Poster is required",
    },
    trailer_film: {
        required: "Film Trailer is required",
    },
    sinopsis_film_id: {
        required: "Film Sinopsis is required",
    },
    longitude: {
        required: "longitude is required",
    },
    latitude: {
        required: "latitude is required",
    },
};

export default errorOptions;
