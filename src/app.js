import React from "react";
import ReactDOM from "react-dom/client";
import img from "../asset/dish.jpg";
import Header from "./components/Header";


const restaurants = [
    {
        "info": {
            "id": "388064",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "r14idp9f6hkxlnb8wmv6",
            "locality": "BOLAI DUTTA STREET",
            "areaName": "Esplanade",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "388064",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "582",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=6686163~p=1~eid=00000187-eb3f-5e68-2a95-bf93006e0128~45826",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:15:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=388064",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "101421",
            "name": "Mughal Arsalan Biryani",
            "cloudinaryImageId": "dqryaxhlba4okzyzcx5z",
            "locality": "MG road",
            "areaName": "College Square",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian",
                "Biryani"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "101421",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "140901",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-06 00:58:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=101421",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "8587",
            "name": "Royal Indian Hotel - Since 1905",
            "cloudinaryImageId": "oblqcc3ecvw4q9f7ukec",
            "locality": "Rabindra Sarani",
            "areaName": "Barabazar Market",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Mughlai"
            ],
            "avgRating": 4.4,
            "feeDetails": {
                "restaurantId": "8587",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "1735",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=8587",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "123459",
            "name": "Ganguram-Beadon Street",
            "cloudinaryImageId": "n8xerwgcs5wse89gyqri",
            "locality": "Maniktala",
            "areaName": "Sovabazar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Sweets",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "123459",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "3988",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "promoted": true,
            "adTrackingId": "cid=6608637~p=3~eid=00000187-eb3f-5e68-2a95-bf95006e0378~45826",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 20:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=123459",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "565580",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "New Building complex",
            "areaName": "Sealdah",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "565580",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-06 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=565580",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "8693",
            "name": "New Paul Dhaba - Veggie Hub",
            "cloudinaryImageId": "wmlntcabugrcpwx12j1p",
            "locality": "Maniktala",
            "areaName": "Kolkata",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "South Indian",
                "Tandoor"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "8693",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "1651",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=8693",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "352389",
            "name": "Bhikharam Chandmal - Phoolbagan",
            "cloudinaryImageId": "4939da053d3cf3e9c324cc577dcada68",
            "locality": "PHOOLBAGAN METRO AND BATA",
            "areaName": "Kankurgachi",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Snacks",
                "Sweets"
            ],
            "avgRating": 4.5,
            "feeDetails": {
                "restaurantId": "352389",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "44812",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=6608678~p=4~eid=00000187-eb3f-5e68-2a95-bf96006e0463~45826",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 20:01:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=352389",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "8698",
            "name": "New Paul Dhaba",
            "cloudinaryImageId": "lelitcdusinvpdltscvu",
            "locality": "Vivekananda Road",
            "areaName": "Maniktala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "8698",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "658",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=8698",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "19515",
            "name": "Mezban Ripon Street",
            "cloudinaryImageId": "jaj2dspo6b2pfvflxiap",
            "locality": "Near Dustarkhwan",
            "areaName": "Ripon Street",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "Biryani",
                "Chinese",
                "Tandoor"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "19515",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "135608",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-06 01:01:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=19515",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "41599",
            "name": "Mio Amore - The Cake Shop",
            "cloudinaryImageId": "8bf25e6cafe30c7e7c9c8f31f628fe96",
            "locality": "Near Park Circus Seven Point",
            "areaName": "Beniapukur",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Desserts",
                "Bakery",
                "Snacks"
            ],
            "avgRating": 4.4,
            "feeDetails": {
                "restaurantId": "41599",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "292958",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=6696003~p=5~eid=00000187-eb3f-5e68-2a95-bf97006e0574~45826",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=41599",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "256298",
            "name": "KALIGODAM",
            "cloudinaryImageId": "golc7jkhd2idldqolgz2",
            "locality": "Burrabazar",
            "areaName": "Barabazar Market",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "Sweets"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "256298",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "18682",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 20:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=256298",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "208617",
            "name": "Gupta Brothers The Abarkhabo Shoppe",
            "cloudinaryImageId": "o6ahtv5y0sdtdo1b7gqt",
            "locality": "Burrabazar",
            "areaName": "MG Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "208617",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "91646",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=208617",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "103065",
            "name": "Darshana",
            "cloudinaryImageId": "l6rhfijqx3pu3x63jqlt",
            "locality": "154 RABINDRA SARANI",
            "areaName": "Jorasanko",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "103065",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "68636",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=6704628~p=7~eid=00000187-eb3f-5e68-2a95-bf99006e073e~45826",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 21:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=103065",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "86185",
            "name": "K C Das",
            "cloudinaryImageId": "xdanjvemztpshnentzrq",
            "areaName": "New Market Area",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Sweets",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 3.8,
            "veg": true,
            "feeDetails": {
                "restaurantId": "86185",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "406001",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 20:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=86185",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "384147",
            "name": "Bake Me Good",
            "cloudinaryImageId": "iyxvyevsufrqrojgsuss",
            "locality": "Central Kolkata",
            "areaName": "Bediadanga",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Snacks"
            ],
            "avgRating": 4.5,
            "feeDetails": {
                "restaurantId": "384147",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "39945",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 20:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=384147",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "543501",
            "name": "Bhatura Singh",
            "cloudinaryImageId": "bbh6ql2yyd7qsin7hhtd",
            "locality": "Maniktala Main Road",
            "areaName": "Kankurgachi",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Street Food",
                "Fast Food",
                "Desserts",
                "Snacks",
                "Indian"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "543501",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "322286",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=6692011~p=8~eid=00000187-eb3f-5e68-2a95-bf9a006e087b~45826",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=543501",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "17620",
            "name": "ATS Arun Tea Stall",
            "cloudinaryImageId": "zh4yj19zryudrvp5czvc",
            "locality": "Near Saturday Club Back gate",
            "areaName": "Park Street Area",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Fast Food"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "17620",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "37652",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 21:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=17620",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "460653",
            "name": "Bhikharam Chandmal Rajuji - RamMandir",
            "locality": "Burrabazar",
            "areaName": "RamMandir",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Sweets",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.5,
            "feeDetails": {
                "restaurantId": "460653",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "8486",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 21:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=460653",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "80507",
            "name": "The Yellow Straw",
            "cloudinaryImageId": "gwo9jkyixel41ksslrbo",
            "locality": "City Centre 1",
            "areaName": "Bidhannagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Juices",
                "Beverages",
                "Healthy Food",
                "Salads",
                "Desserts",
                "Snacks",
                "Ice Cream",
                "South Indian"
            ],
            "avgRating": 4.5,
            "feeDetails": {
                "restaurantId": "80507",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "10442",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "promoted": true,
            "adTrackingId": "cid=6608459~p=9~eid=00000187-eb3f-5e68-2a95-bf9b006e0902~45826",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=80507",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "340615",
            "name": "Bhim Nag's Brother Sreenath Nag",
            "cloudinaryImageId": "dfe2eed8f8a972016c5ec013061f6d46",
            "locality": "Bhattacharyya Road",
            "areaName": "Burrabazar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "340615",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "358711",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=340615",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "609684",
            "name": "RED CHILLIES",
            "cloudinaryImageId": "svx8v4pejriivga8rgls",
            "locality": "Borough V",
            "areaName": "Central Kolkata",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Fast Food",
                "Snacks",
                "Beverages",
                "Pizzas"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "609684",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "168299",
            "avgRatingString": "3.7",
            "totalRatingsString": "20+",
            "promoted": true,
            "adTrackingId": "cid=6696078~p=11~eid=00000187-eb3f-5e68-2a95-bf9d006e0b40~45826",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=609684",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "18359",
            "name": "Apu's Kitchen Phool Bagan",
            "cloudinaryImageId": "e49fwbcb7szcnnj44sht",
            "locality": "Hem Chandra Naskar Road",
            "areaName": "NearGurudasPark",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "Chinese"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "18359",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "6113",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    },
                    "imageBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=18359",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "614731",
            "name": "That Donut Shop",
            "cloudinaryImageId": "nm5fqc7p5byfzeisbedf",
            "locality": "Kalyan",
            "areaName": "Central Kolkata",
            "costForTwo": "₹160 for two",
            "cuisines": [
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.6,
            "feeDetails": {
                "restaurantId": "614731",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "366497",
            "avgRatingString": "4.6",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹45"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=614731",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "176970",
            "name": "edabba",
            "cloudinaryImageId": "wljcy2sih7te142j23as",
            "locality": "New Market",
            "areaName": "Taltala",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani",
                "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "176970",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "11101",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-06 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textExtendedBadges": {

                    },
                    "textBased": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=176970",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "18360",
            "name": "Little Pleasures ",
            "cloudinaryImageId": "r7s4ivwuoylstthvp2v3",
            "locality": "Near La Martiniere School",
            "areaName": "Elgin",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.6,
            "feeDetails": {
                "restaurantId": "18360",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "18665",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-05-05 19:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {

                    },
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "newg.png",
                                    "description": "Gourmet"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=18360",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
]



const ResturentCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines } = resData?.info;
    return (
        <div className="res-card" >
            <img className="dish-img" alt="dish" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>4.4 starts</h4>
            <h4>38 minutes</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search" >search</div>
            <div className="res-container">
                {
                    restaurants.map(restu => <ResturentCard key={restu.info.id} resData={restu} />)
                }
            </div>
        </div>
    )
}


const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}












const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)

