/** @format */

export const errorOptions = {
  username: {
    required: "Username is Required",
    minLength: {
      value: 5,
      message: "Username must be at least 5 characters",
    },
  },
  is_main_cast: {
    required: "is_main_cast is Required",
  },

  phone: {
    required: "Phone Number is Required",
    minLength: {
      value: 10,
      message: "Phone Number must be at least 10 characters",
    },
  },

  password: {
    required: "Password is Required",
    minLength: {
      value: 4,
      message: "Password must be at least 4 characters",
    },
  },

  title_about: {
    required: "Title is Required",
    minLength: {
      value: 4,
      message: "Title must be at least 4 characters",
    },
  },

  desc_about: {
    required: "Description is Required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters",
    },
  },

  title_film: {
    required: "Title Film is Required",
    minLength: {
      value: 2,
      message: "Title Film must be at least 2 characters",
    },
  },

  sinopsis_film_id: {
    required: "Sinopsis Film ID (Bahasa) is Required",
    minLength: {
      value: 6,
      message: "Sinopsis Film must be at least 6 characters",
    },
  },
  sinopsis_film_en: {
    required: "Sinopsis Film EN (English) is Required",
    minLength: {
      value: 6,
      message: "Sinopsis Film must be at least 6 characters",
    },
  },
  genre_film: {
    required: "Genre Film is Required",
    minLength: {
      value: 3,
      message: "Sinopsis Film must be at least 3 characters",
    },
  },
  durasi_film: {
    required: "Durasi Film is Required",
  },
  id_rating: {
    required: "Rating Film is Required",
  },
  sutradara_film: {
    required: "Sutradara Film is Required",
  },
  produser_film: {
    required: "Produser Film is Required",
  },
  produksi_film: {
    required: "Prodution House Film is Required",
  },

  url: {
    required: "Url is Required",
    // pattern: {
    //   value:
    //     /^(https?:\/\/)?([\w\-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
    //   message: "Format link tidak valid",
    // },
  },

  name_banner: {
    required: "Name Banner is Required",
    minLength: {
      value: 4,
      message: "Name Banner must be at least 4 characters",
    },
  },

  start_date_banner: {
    required: "Start Date Banner is Required",
  },
  nama_casting_film: {
    required: "Nama Artis is Required",
  },

  end_date_banner: {
    required: "End Date Banner is Required",
  },

  sosmed_name_casting_film: {
    required: "Nama Sosial Media is Required",
  },
  sosmed_url_casting_film: {
    required: "URL Sosial Media is Required",
  },
  sebagai_casting_film: {
    required: "Pemeran is Required",
  },
  sinopsis_casting_film_id: {
    required: "Deskripsi ID is Required ",
  },
  sinopsis_casting_film_en: {
    required: "Deskripsi EN is Required ",
  },

  img: {
    required: "Image is Required",
  },

  name_country: {
    required: "Name Country is Required",
    minLength: {
      value: 4,
      message: "Name Country must be at least 4 characters",
    },
  },

  code_country: {
    required: "Code Country is Required",
    minLength: {
      value: 3,
      message: "Code Country must be at least 3 characters",
    },
    maxLength: {
      value: 3,
      message: "Code Country must be at most 3 characters",
    },
  },

  name_province: {
    required: "Name Province is Required",
    minLength: {
      value: 4,
      message: "Name Provice must be at least 4 characters",
    },
  },

  code_province: {
    required: "Code Province is Required",
    // minLength: {
    //   value: 3,
    //   message: "Code Province must be at least 3 characters",
    // },
    maxLength: {
      value: 5,
      message: "Code Province must be at most 5 characters",
    },
  },

  select_country: {
    required: "Select Country is Required",
  },

  name_city: {
    required: "Name City is Required",
    minLength: {
      value: 4,
      message: "Name City must be at least 4 characters",
    },
  },

  code_city: {
    required: "Code City is Required",
    // minLength: {
    //   value: 3,
    //   message: "Code City must be at least 3 characters",
    // },
    maxLength: {
      value: 5,
      message: "Code City must be at most 5 characters",
    },
  },

  select_province: {
    required: "Select Province is Required",
  },

  name_office: {
    required: "Name Office is Required",
    minLength: {
      value: 4,
      message: "Name Office must be at least 4 characters",
    },
  },

  social_media: {
    required: "Social Media is Required",
  },
  contact_sosmed_name: {
    required: "Contact Type is Required",
  },
  contact_sosmed_logo: {
    required: "Contact Icon is Required",
  },
  contact_name: {
    required: "Contact Name is Required",
  },
  contact_url: {
    required: "Contact URL is Required",
  },
  contact_type: {
    required: "Contact Type is Required",
  },

  select_city: {
    required: "Select City is Required",
  },
  adress: {
    required: "Address is Required",
  },
  longitute: {
    required: "Longitute is Required",
    pattern: {
      value: /^-?\d+(\.\d+)?$/,
      message: "Hanya boleh angka",
    },
  },
  latitude: {
    required: "Latitude is Required",
    pattern: {
      value: /^-?\d+(\.\d+)?$/,
      message: "Hanya boleh angka",
    },
  },
  select_role: {
    required: "Select Role is Required",
  },

  role_name: {
    required: "Role Name is Required",
  },

  priority: {
    required: "Priority is Required",
  },
  status: {
    required: "Status is Required",
  },
  category_name: {
    required: "Category Name is Required",
  },
  select_category: {
    required: "Select Category is Required",
  },
  article_img: {
    required: "Article Image is Required",
  },
  article_thumbnail_img: {
    required: "Article Thumbnail Image is Required",
  },
  article_title: {
    required: "Article Title is Required",
    pattern: {
      value: /^[A-Za-z0-9\s]+$/,
      message:
        "No punctuation marks allowed. only letters, numbers, and spaces.",
    },
  },
  article_slug: {
    required: "Article Slug is Required",
  },
  article_thumbnail_content: {
    required: "Article Thumbnail Content is Required",
  },
  article_content: {
    required: "Article Content is Required",
  },
  rating_name: {
    required: "Rating Name is Required",
  },
  code_rating: {
    required: "Code Rating is Required",
  },
};
