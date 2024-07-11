import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getImages } from "../../features/images/searchThunk";
import { fetchedImages } from "../../features/images/searchSlice";

export const MainContent = () => {

    const handleEmailClick = () => {
        window.open('mailto:jaimehu.dev@gmail.com');
    }

    const datilla = [
        {
          "id": "pCHtRD6aHUA",
          "slug": "a-close-up-of-a-green-and-white-painting-pCHtRD6aHUA",
          "alternative_slugs": {
            "en": "a-close-up-of-a-green-and-white-painting-pCHtRD6aHUA",
            "es": "un-primer-plano-de-una-pintura-verde-y-blanca-pCHtRD6aHUA",
            "ja": "緑と白の絵のクローズアップ-pCHtRD6aHUA",
            "fr": "gros-plan-dun-tableau-vert-et-blanc-pCHtRD6aHUA",
            "it": "un-primo-piano-di-un-dipinto-verde-e-bianco-pCHtRD6aHUA",
            "ko": "녹색과-흰색-그림의-클로즈업-pCHtRD6aHUA",
            "de": "nahaufnahme-eines-grun-weissen-gemaldes-pCHtRD6aHUA",
            "pt": "um-close-up-de-uma-pintura-verde-e-branca-pCHtRD6aHUA"
          },
          "created_at": "2023-02-03T06:02:19Z",
          "updated_at": "2024-07-08T00:53:47Z",
          "promoted_at": "2024-06-11T08:26:52Z",
          "width": 4000,
          "height": 6000,
          "color": "#73c073",
          "blur_hash": "LDDn~rMx9t%39?^A%MI-?[tQxu%2",
          "description": null,
          "alt_description": "a close up of a green and white painting",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://plus.unsplash.com/premium_photo-1675362696692-636305144028?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://plus.unsplash.com/premium_photo-1675362696692-636305144028?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://plus.unsplash.com/premium_photo-1675362696692-636305144028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://plus.unsplash.com/premium_photo-1675362696692-636305144028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://plus.unsplash.com/premium_photo-1675362696692-636305144028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/unsplash-premium-photos-production/premium_photo-1675362696692-636305144028"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-close-up-of-a-green-and-white-painting-pCHtRD6aHUA",
            "html": "https://unsplash.com/photos/a-close-up-of-a-green-and-white-painting-pCHtRD6aHUA",
            "download": "https://unsplash.com/photos/pCHtRD6aHUA/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/pCHtRD6aHUA/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 89,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "food-drink": {
              "status": "approved",
              "approved_on": "2024-06-13T18:14:36Z"
            },
            "wallpapers": {
              "status": "approved",
              "approved_on": "2024-02-23T06:30:02Z"
            }
          },
          "asset_type": "photo",
          "user": {
            "id": "QCiH_Hr8Wfs",
            "updated_at": "2024-07-11T18:27:10Z",
            "username": "susan_wilkinson",
            "name": "Susan Wilkinson",
            "first_name": "Susan",
            "last_name": "Wilkinson",
            "twitter_username": "Susan_Wilkinson",
            "portfolio_url": "https://creativemarket.com/Susan_Wilkinson",
            "bio": "Photo bundles for personal or commercial use through the link below. Have questions or need custom art? Contact me via the Unsplash message button above.",
            "location": "Colorado, USA",
            "links": {
              "self": "https://api.unsplash.com/users/susan_wilkinson",
              "html": "https://unsplash.com/@susan_wilkinson",
              "photos": "https://api.unsplash.com/users/susan_wilkinson/photos",
              "likes": "https://api.unsplash.com/users/susan_wilkinson/likes",
              "portfolio": "https://api.unsplash.com/users/susan_wilkinson/portfolio",
              "following": "https://api.unsplash.com/users/susan_wilkinson/following",
              "followers": "https://api.unsplash.com/users/susan_wilkinson/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1708290810362-04d66b50c037image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1708290810362-04d66b50c037image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1708290810362-04d66b50c037image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "susan.wilkinson.photography",
            "total_collections": 167,
            "total_likes": 13873,
            "total_photos": 3332,
            "total_promoted_photos": 675,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": "susan.wilkinson.photography",
              "portfolio_url": "https://creativemarket.com/Susan_Wilkinson",
              "twitter_username": "Susan_Wilkinson",
              "paypal_email": null
            }
          },
          "exif": {
            "make": null,
            "model": null,
            "name": null,
            "exposure_time": null,
            "aperture": null,
            "focal_length": null,
            "iso": null
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "views": 0,
          "downloads": 0
        },
        {
          "id": "m8iKhiNh4T0",
          "slug": "a-man-standing-in-a-field-of-tall-grass-m8iKhiNh4T0",
          "alternative_slugs": {
            "en": "a-man-standing-in-a-field-of-tall-grass-m8iKhiNh4T0",
            "es": "un-hombre-de-pie-en-un-campo-de-hierba-alta-m8iKhiNh4T0",
            "ja": "背の高い草原に立つ男-m8iKhiNh4T0",
            "fr": "un-homme-debout-dans-un-champ-dherbes-hautes-m8iKhiNh4T0",
            "it": "un-uomo-in-piedi-in-un-campo-di-erba-alta-m8iKhiNh4T0",
            "ko": "키-큰-풀밭에-서-있는-남자-m8iKhiNh4T0",
            "de": "ein-mann-der-auf-einem-feld-mit-hohem-gras-steht-m8iKhiNh4T0",
            "pt": "um-homem-em-pe-em-um-campo-de-grama-alta-m8iKhiNh4T0"
          },
          "created_at": "2024-06-11T02:42:08Z",
          "updated_at": "2024-07-08T00:43:33Z",
          "promoted_at": "2024-06-12T11:57:36Z",
          "width": 3412,
          "height": 4182,
          "color": "#26260c",
          "blur_hash": "LfFF7|M|9Zn~~URjM|WC_2RjRPWC",
          "description": null,
          "alt_description": "a man standing in a field of tall grass",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1718073725822-96f864f08837?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1718073725822-96f864f08837?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1718073725822-96f864f08837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1718073725822-96f864f08837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1718073725822-96f864f08837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718073725822-96f864f08837"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-man-standing-in-a-field-of-tall-grass-m8iKhiNh4T0",
            "html": "https://unsplash.com/photos/a-man-standing-in-a-field-of-tall-grass-m8iKhiNh4T0",
            "download": "https://unsplash.com/photos/m8iKhiNh4T0/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/m8iKhiNh4T0/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 39,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "people": {
              "status": "approved",
              "approved_on": "2024-06-17T12:58:32Z"
            }
          },
          "asset_type": "photo",
          "user": {
            "id": "GA8BER4Fd2U",
            "updated_at": "2024-06-12T11:57:37Z",
            "username": "davegoudreau",
            "name": "Dave Goudreau",
            "first_name": "Dave",
            "last_name": "Goudreau",
            "twitter_username": null,
            "portfolio_url": "http://davegoudreau",
            "bio": "Streets & Faces.",
            "location": "Qc, Canada",
            "links": {
              "self": "https://api.unsplash.com/users/davegoudreau",
              "html": "https://unsplash.com/@davegoudreau",
              "photos": "https://api.unsplash.com/users/davegoudreau/photos",
              "likes": "https://api.unsplash.com/users/davegoudreau/likes",
              "portfolio": "https://api.unsplash.com/users/davegoudreau/portfolio",
              "following": "https://api.unsplash.com/users/davegoudreau/following",
              "followers": "https://api.unsplash.com/users/davegoudreau/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1692762160478-54fb4ac3cec0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1692762160478-54fb4ac3cec0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1692762160478-54fb4ac3cec0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "dave.goud",
            "total_collections": 0,
            "total_likes": 1016,
            "total_photos": 1126,
            "total_promoted_photos": 358,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": "dave.goud",
              "portfolio_url": "http://davegoudreau",
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": "SONY",
            "model": "ILCE-7M3",
            "name": "SONY, ILCE-7M3",
            "exposure_time": "1/1250",
            "aperture": "1.8",
            "focal_length": "85.0",
            "iso": 100
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": null,
              "longitude": null
            }
          },
          "views": 329978,
          "downloads": 4884
        },
        {
          "id": "EPTk9I65EmM",
          "slug": "a-woman-in-an-orange-dress-standing-in-front-of-a-mountain-EPTk9I65EmM",
          "alternative_slugs": {
            "en": "a-woman-in-an-orange-dress-standing-in-front-of-a-mountain-EPTk9I65EmM",
            "es": "una-mujer-con-un-vestido-naranja-de-pie-frente-a-una-montana-EPTk9I65EmM",
            "ja": "山の前に立つオレンジ色のドレスを着た女性-EPTk9I65EmM",
            "fr": "une-femme-en-robe-orange-debout-devant-une-montagne-EPTk9I65EmM",
            "it": "una-donna-in-un-vestito-arancione-in-piedi-di-fronte-a-una-montagna-EPTk9I65EmM",
            "ko": "산-앞에-서-있는-주황색-드레스를-입은-여자-EPTk9I65EmM",
            "de": "eine-frau-in-einem-orangefarbenen-kleid-steht-vor-einem-berg-EPTk9I65EmM",
            "pt": "uma-mulher-em-um-vestido-laranja-em-pe-na-frente-de-uma-montanha-EPTk9I65EmM"
          },
          "created_at": "2024-06-13T17:58:45Z",
          "updated_at": "2024-07-09T23:00:25Z",
          "promoted_at": "2024-06-19T12:35:41Z",
          "width": 6565,
          "height": 4377,
          "color": "#a6c0d9",
          "blur_hash": "LkJH?tt-R*ayyZozaeWBNeMwM{j]",
          "description": "Gone with the wind",
          "alt_description": "a woman in an orange dress standing in front of a mountain",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1718301151712-0f841310d51a?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1718301151712-0f841310d51a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1718301151712-0f841310d51a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1718301151712-0f841310d51a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1718301151712-0f841310d51a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718301151712-0f841310d51a"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-woman-in-an-orange-dress-standing-in-front-of-a-mountain-EPTk9I65EmM",
            "html": "https://unsplash.com/photos/a-woman-in-an-orange-dress-standing-in-front-of-a-mountain-EPTk9I65EmM",
            "download": "https://unsplash.com/photos/EPTk9I65EmM/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/EPTk9I65EmM/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 33,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
      
          },
          "asset_type": "photo",
          "user": {
            "id": "dg4S8j5TzmE",
            "updated_at": "2024-07-11T07:47:45Z",
            "username": "karsten116",
            "name": "Karsten Winegeart",
            "first_name": "Karsten",
            "last_name": "Winegeart",
            "twitter_username": "karsten116",
            "portfolio_url": null,
            "bio": "IG - @karsten116",
            "location": "Austin Texas",
            "links": {
              "self": "https://api.unsplash.com/users/karsten116",
              "html": "https://unsplash.com/@karsten116",
              "photos": "https://api.unsplash.com/users/karsten116/photos",
              "likes": "https://api.unsplash.com/users/karsten116/likes",
              "portfolio": "https://api.unsplash.com/users/karsten116/portfolio",
              "following": "https://api.unsplash.com/users/karsten116/following",
              "followers": "https://api.unsplash.com/users/karsten116/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "karsten116",
            "total_collections": 1,
            "total_likes": 844,
            "total_photos": 935,
            "total_promoted_photos": 543,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "karsten116",
              "portfolio_url": null,
              "twitter_username": "karsten116",
              "paypal_email": null
            }
          },
          "exif": {
            "make": null,
            "model": null,
            "name": null,
            "exposure_time": null,
            "aperture": null,
            "focal_length": null,
            "iso": null
          },
          "location": {
            "name": "Hverir, Reykjahlíð, Iceland",
            "city": "Reykjahlíð",
            "country": "Iceland",
            "position": {
              "latitude": 65.640914,
              "longitude": -16.809311
            }
          },
          "views": 385606,
          "downloads": 6914
        },
        {
          "id": "_eBHC9WJ7E8",
          "slug": "a-bouquet-of-sunflowers-on-a-wooden-surface-_eBHC9WJ7E8",
          "alternative_slugs": {
            "en": "a-bouquet-of-sunflowers-on-a-wooden-surface-_eBHC9WJ7E8",
            "es": "un-ramo-de-girasoles-sobre-una-superficie-de-madera-_eBHC9WJ7E8",
            "ja": "木の表面に描かれたヒマワリの花束-_eBHC9WJ7E8",
            "fr": "un-bouquet-de-tournesols-sur-une-surface-en-bois-_eBHC9WJ7E8",
            "it": "un-mazzo-di-girasoli-su-una-superficie-di-legno-_eBHC9WJ7E8",
            "ko": "나무-표면에-해바라기-꽃다발-_eBHC9WJ7E8",
            "de": "ein-strauss-sonnenblumen-auf-einer-holzoberflache-_eBHC9WJ7E8",
            "pt": "um-buque-de-girassois-em-uma-superficie-de-madeira-_eBHC9WJ7E8"
          },
          "created_at": "2024-06-13T20:59:47Z",
          "updated_at": "2024-07-09T20:01:28Z",
          "promoted_at": "2024-06-14T06:25:29Z",
          "width": 4160,
          "height": 6240,
          "color": "#262626",
          "blur_hash": "L86aS2WV5Voe$%ayNbj@0%j[=tWC",
          "description": null,
          "alt_description": "a bouquet of sunflowers on a wooden surface",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1718312275779-99010e78b2ce?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1718312275779-99010e78b2ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1718312275779-99010e78b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1718312275779-99010e78b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1718312275779-99010e78b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718312275779-99010e78b2ce"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-bouquet-of-sunflowers-on-a-wooden-surface-_eBHC9WJ7E8",
            "html": "https://unsplash.com/photos/a-bouquet-of-sunflowers-on-a-wooden-surface-_eBHC9WJ7E8",
            "download": "https://unsplash.com/photos/_eBHC9WJ7E8/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/_eBHC9WJ7E8/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 75,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
      
          },
          "asset_type": "photo",
          "user": {
            "id": "_pkvKyk6CiM",
            "updated_at": "2024-07-09T10:52:39Z",
            "username": "alexandermassph",
            "name": "Alexander Mass",
            "first_name": "Alexander",
            "last_name": "Mass",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": null,
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/alexandermassph",
              "html": "https://unsplash.com/@alexandermassph",
              "photos": "https://api.unsplash.com/users/alexandermassph/photos",
              "likes": "https://api.unsplash.com/users/alexandermassph/likes",
              "portfolio": "https://api.unsplash.com/users/alexandermassph/portfolio",
              "following": "https://api.unsplash.com/users/alexandermassph/following",
              "followers": "https://api.unsplash.com/users/alexandermassph/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1702352055453-324fc6a5e3cbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1702352055453-324fc6a5e3cbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1702352055453-324fc6a5e3cbimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "alexandermass.ph",
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 1259,
            "total_promoted_photos": 57,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "alexandermass.ph",
              "portfolio_url": null,
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": "Canon",
            "model": " EOS RP",
            "name": "Canon, EOS RP",
            "exposure_time": "1/1000",
            "aperture": "1.4",
            "focal_length": "35.0",
            "iso": 1600
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "views": 517973,
          "downloads": 6404
        },
        {
          "id": "NTxb5XU6pnM",
          "slug": "a-woman-sitting-on-the-edge-of-a-body-of-water-NTxb5XU6pnM",
          "alternative_slugs": {
            "en": "a-woman-sitting-on-the-edge-of-a-body-of-water-NTxb5XU6pnM",
            "es": "una-mujer-sentada-en-el-borde-de-un-cuerpo-de-agua-NTxb5XU6pnM",
            "ja": "水辺に座る女性-NTxb5XU6pnM",
            "fr": "une-femme-assise-au-bord-dun-plan-deau-NTxb5XU6pnM",
            "it": "una-donna-seduta-sul-bordo-di-uno-specchio-dacqua-NTxb5XU6pnM",
            "ko": "물가에-앉아-있는-여자-NTxb5XU6pnM",
            "de": "eine-frau-sitzt-am-rande-eines-gewassers-NTxb5XU6pnM",
            "pt": "uma-mulher-sentada-a-beira-de-um-corpo-de-agua-NTxb5XU6pnM"
          },
          "created_at": "2024-06-16T07:53:22Z",
          "updated_at": "2024-07-10T14:02:36Z",
          "promoted_at": "2024-06-18T16:21:24Z",
          "width": 4672,
          "height": 7008,
          "color": "#c0c0c0",
          "blur_hash": "LVIrESxuWXj[~XoLayofaJWBaxWB",
          "description": null,
          "alt_description": "A woman sitting on the edge of a body of water",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1718524127932-2696e2f59096?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1718524127932-2696e2f59096?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1718524127932-2696e2f59096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1718524127932-2696e2f59096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1718524127932-2696e2f59096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718524127932-2696e2f59096"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-woman-sitting-on-the-edge-of-a-body-of-water-NTxb5XU6pnM",
            "html": "https://unsplash.com/photos/a-woman-sitting-on-the-edge-of-a-body-of-water-NTxb5XU6pnM",
            "download": "https://unsplash.com/photos/NTxb5XU6pnM/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/NTxb5XU6pnM/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 53,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "pastels": {
              "status": "approved",
              "approved_on": "2024-06-21T18:08:11Z"
            }
          },
          "asset_type": "photo",
          "user": {
            "id": "ePlndXHeIiM",
            "updated_at": "2024-07-10T03:06:12Z",
            "username": "lwdzl",
            "name": "Jack Dong",
            "first_name": "Jack",
            "last_name": "Dong",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": null,
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/lwdzl",
              "html": "https://unsplash.com/@lwdzl",
              "photos": "https://api.unsplash.com/users/lwdzl/photos",
              "likes": "https://api.unsplash.com/users/lwdzl/likes",
              "portfolio": "https://api.unsplash.com/users/lwdzl/portfolio",
              "following": "https://api.unsplash.com/users/lwdzl/following",
              "followers": "https://api.unsplash.com/users/lwdzl/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 0,
            "total_likes": 107,
            "total_photos": 671,
            "total_promoted_photos": 114,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": null,
              "portfolio_url": null,
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": "SONY",
            "model": "ILCE-7M4",
            "name": "SONY, ILCE-7M4",
            "exposure_time": "1/1000",
            "aperture": "3.2",
            "focal_length": "64.0",
            "iso": 100
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "views": 378978,
          "downloads": 3440
        },
        {
          "id": "LMllmntSSzY",
          "slug": "a-woman-sitting-on-a-skateboard-in-a-parking-lot-LMllmntSSzY",
          "alternative_slugs": {
            "en": "a-woman-sitting-on-a-skateboard-in-a-parking-lot-LMllmntSSzY",
            "es": "una-mujer-sentada-en-una-patineta-en-un-estacionamiento-LMllmntSSzY",
            "ja": "駐車場でスケートボードに座る女性-LMllmntSSzY",
            "fr": "une-femme-assise-sur-une-planche-a-roulettes-dans-un-parking-LMllmntSSzY",
            "it": "una-donna-seduta-su-uno-skateboard-in-un-parcheggio-LMllmntSSzY",
            "ko": "주차장에서-스케이트보드에-앉아-있는-여성-LMllmntSSzY",
            "de": "eine-frau-sitzt-auf-einem-skateboard-auf-einem-parkplatz-LMllmntSSzY",
            "pt": "uma-mulher-sentada-em-um-skate-em-um-estacionamento-LMllmntSSzY"
          },
          "created_at": "2024-06-21T10:26:28Z",
          "updated_at": "2024-07-07T23:42:06Z",
          "promoted_at": "2024-06-24T13:05:36Z",
          "width": 3700,
          "height": 5597,
          "color": "#f3f3f3",
          "blur_hash": "LeHeg=%htlx]9ZRjofRj01V?V[ay",
          "description": "Portrait.",
          "alt_description": "A woman sitting on a skateboard in a parking lot",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1718964313551-420f92249238?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1718964313551-420f92249238?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1718964313551-420f92249238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1718964313551-420f92249238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1718964313551-420f92249238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1718964313551-420f92249238"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-woman-sitting-on-a-skateboard-in-a-parking-lot-LMllmntSSzY",
            "html": "https://unsplash.com/photos/a-woman-sitting-on-a-skateboard-in-a-parking-lot-LMllmntSSzY",
            "download": "https://unsplash.com/photos/LMllmntSSzY/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/LMllmntSSzY/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 79,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
      
          },
          "asset_type": "photo",
          "user": {
            "id": "pwEcRQR30yw",
            "updated_at": "2024-07-11T18:17:12Z",
            "username": "branislavrodman",
            "name": "Branislav Rodman",
            "first_name": "Branislav",
            "last_name": "Rodman",
            "twitter_username": null,
            "portfolio_url": "http://www.branislavrodman.art",
            "bio": "Streets tells the best stories.",
            "location": "Prague",
            "links": {
              "self": "https://api.unsplash.com/users/branislavrodman",
              "html": "https://unsplash.com/@branislavrodman",
              "photos": "https://api.unsplash.com/users/branislavrodman/photos",
              "likes": "https://api.unsplash.com/users/branislavrodman/likes",
              "portfolio": "https://api.unsplash.com/users/branislavrodman/portfolio",
              "following": "https://api.unsplash.com/users/branislavrodman/following",
              "followers": "https://api.unsplash.com/users/branislavrodman/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1691306379908-e083d0dc5521?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1691306379908-e083d0dc5521?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1691306379908-e083d0dc5521?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "atelier__58",
            "total_collections": 2,
            "total_likes": 1,
            "total_photos": 201,
            "total_promoted_photos": 19,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "atelier__58",
              "portfolio_url": "http://www.branislavrodman.art",
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": "Canon",
            "model": " EOS 5D Mark III",
            "name": "Canon, EOS 5D Mark III",
            "exposure_time": "1/200",
            "aperture": "1.4",
            "focal_length": "24.0",
            "iso": 5000
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "views": 750769,
          "downloads": 6329
        },
        {
          "id": "kwzJSp6LDAw",
          "slug": "a-glass-of-orange-juice-on-a-table-kwzJSp6LDAw",
          "alternative_slugs": {
            "en": "a-glass-of-orange-juice-on-a-table-kwzJSp6LDAw",
            "es": "un-vaso-de-zumo-de-naranja-sobre-una-mesa-kwzJSp6LDAw",
            "ja": "テーブルの上のオレンジジュースのグラス-kwzJSp6LDAw",
            "fr": "un-verre-de-jus-dorange-sur-une-table-kwzJSp6LDAw",
            "it": "un-bicchiere-di-succo-darancia-su-un-tavolo-kwzJSp6LDAw",
            "ko": "테이블-위에-놓인-오렌지-주스-한-잔-kwzJSp6LDAw",
            "de": "ein-glas-orangensaft-auf-einem-tisch-kwzJSp6LDAw",
            "pt": "um-copo-de-suco-de-laranja-em-uma-mesa-kwzJSp6LDAw"
          },
          "created_at": "2024-07-02T15:54:28Z",
          "updated_at": "2024-07-10T19:34:08Z",
          "promoted_at": "2024-07-07T08:32:43Z",
          "width": 4000,
          "height": 6000,
          "color": "#d9d9d9",
          "blur_hash": "LPQS#Rx^M|ozpynhj[WXITXAn$n#",
          "description": "A summer drink in a vintage champagne coupe.",
          "alt_description": "A glass of orange juice on a table",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1719934665180-07ce0daa90e5?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1719934665180-07ce0daa90e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1719934665180-07ce0daa90e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1719934665180-07ce0daa90e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1719934665180-07ce0daa90e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719934665180-07ce0daa90e5"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-glass-of-orange-juice-on-a-table-kwzJSp6LDAw",
            "html": "https://unsplash.com/photos/a-glass-of-orange-juice-on-a-table-kwzJSp6LDAw",
            "download": "https://unsplash.com/photos/kwzJSp6LDAw/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/kwzJSp6LDAw/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 36,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
      
          },
          "asset_type": "photo",
          "user": {
            "id": "M2Ip4usF7xI",
            "updated_at": "2024-07-10T11:39:05Z",
            "username": "fsmurrayphoto",
            "name": "Fiona Murray-deGraaff",
            "first_name": "Fiona",
            "last_name": "Murray-deGraaff",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": null,
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/fsmurrayphoto",
              "html": "https://unsplash.com/@fsmurrayphoto",
              "photos": "https://api.unsplash.com/users/fsmurrayphoto/photos",
              "likes": "https://api.unsplash.com/users/fsmurrayphoto/likes",
              "portfolio": "https://api.unsplash.com/users/fsmurrayphoto/portfolio",
              "following": "https://api.unsplash.com/users/fsmurrayphoto/following",
              "followers": "https://api.unsplash.com/users/fsmurrayphoto/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1685208493424-8ce305bfd2f3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1685208493424-8ce305bfd2f3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1685208493424-8ce305bfd2f3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 225,
            "total_promoted_photos": 22,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": null,
              "portfolio_url": null,
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": null,
            "model": null,
            "name": null,
            "exposure_time": null,
            "aperture": null,
            "focal_length": null,
            "iso": null
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "views": 134578,
          "downloads": 3472
        },
        {
          "id": "p-xTbAOvsnk",
          "slug": "a-man-holding-a-baby-while-laying-on-a-bed-p-xTbAOvsnk",
          "alternative_slugs": {
            "en": "a-man-holding-a-baby-while-laying-on-a-bed-p-xTbAOvsnk",
            "es": "un-hombre-sosteniendo-a-un-bebe-mientras-esta-acostado-en-una-cama-p-xTbAOvsnk",
            "ja": "赤ん坊を抱きかかえてベッドに横たわる男性-p-xTbAOvsnk",
            "fr": "un-homme-tenant-un-bebe-allonge-sur-un-lit-p-xTbAOvsnk",
            "it": "un-uomo-che-tiene-in-braccio-un-bambino-mentre-e-sdraiato-su-un-letto-p-xTbAOvsnk",
            "ko": "침대에-누워-아기를-안고-있는-남자-p-xTbAOvsnk",
            "de": "ein-mann-halt-ein-baby-wahrend-er-auf-einem-bett-liegt-p-xTbAOvsnk",
            "pt": "um-homem-segurando-um-bebe-enquanto-deitado-em-uma-cama-p-xTbAOvsnk"
          },
          "created_at": "2024-07-03T00:44:35Z",
          "updated_at": "2024-07-10T19:15:54Z",
          "promoted_at": "2024-07-05T05:52:11Z",
          "width": 3024,
          "height": 4032,
          "color": "#260c0c",
          "blur_hash": "LKJ7p|znM{V[~BNHI=IUOFxZivE2",
          "description": "Happy 8th year of love and laughter with my best friend (and almost one year with our missing piece).",
          "alt_description": "A man holding a baby while laying on a bed",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1719967473558-cc9d6f856d07?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1719967473558-cc9d6f856d07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1719967473558-cc9d6f856d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1719967473558-cc9d6f856d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1719967473558-cc9d6f856d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1719967473558-cc9d6f856d07"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-man-holding-a-baby-while-laying-on-a-bed-p-xTbAOvsnk",
            "html": "https://unsplash.com/photos/a-man-holding-a-baby-while-laying-on-a-bed-p-xTbAOvsnk",
            "download": "https://unsplash.com/photos/p-xTbAOvsnk/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/p-xTbAOvsnk/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 19,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
      
          },
          "asset_type": "photo",
          "user": {
            "id": "cXBdbJwGGLE",
            "updated_at": "2024-07-05T05:52:11Z",
            "username": "madalyncox",
            "name": "Madalyn Cox",
            "first_name": "Madalyn",
            "last_name": "Cox",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": null,
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/madalyncox",
              "html": "https://unsplash.com/@madalyncox",
              "photos": "https://api.unsplash.com/users/madalyncox/photos",
              "likes": "https://api.unsplash.com/users/madalyncox/likes",
              "portfolio": "https://api.unsplash.com/users/madalyncox/portfolio",
              "following": "https://api.unsplash.com/users/madalyncox/following",
              "followers": "https://api.unsplash.com/users/madalyncox/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1556423149413-0d2c47ab23fd?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1556423149413-0d2c47ab23fd?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1556423149413-0d2c47ab23fd?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 0,
            "total_likes": 394,
            "total_photos": 326,
            "total_promoted_photos": 16,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": null,
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": null,
            "model": null,
            "name": null,
            "exposure_time": null,
            "aperture": null,
            "focal_length": null,
            "iso": null
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": null,
              "longitude": null
            }
          },
          "views": 165015,
          "downloads": 3389
        },
        {
          "id": "XSftOsyPRZU",
          "slug": "a-black-car-with-a-basket-on-top-of-it-XSftOsyPRZU",
          "alternative_slugs": {
            "en": "a-black-car-with-a-basket-on-top-of-it-XSftOsyPRZU",
            "es": "un-coche-negro-con-una-cesta-encima-XSftOsyPRZU",
            "ja": "カゴを載せた黒い車-XSftOsyPRZU",
            "fr": "une-voiture-noire-avec-un-panier-sur-le-dessus-XSftOsyPRZU",
            "it": "unauto-nera-con-un-cestino-sopra-XSftOsyPRZU",
            "ko": "바구니가-달린-검은색-자동차-XSftOsyPRZU",
            "de": "ein-schwarzes-auto-mit-einem-korb-darauf-XSftOsyPRZU",
            "pt": "um-carro-preto-com-uma-cesta-em-cima-dele-XSftOsyPRZU"
          },
          "created_at": "2024-07-04T21:18:19Z",
          "updated_at": "2024-07-11T04:09:02Z",
          "promoted_at": "2024-07-05T05:53:28Z",
          "width": 4000,
          "height": 5000,
          "color": "#262626",
          "blur_hash": "L37B1O?Fo~WB_3ROR:S2?E?atSM_",
          "description": null,
          "alt_description": "A black car with a basket on top of it",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1720127365685-e4b6f23fe60f?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1720127365685-e4b6f23fe60f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1720127365685-e4b6f23fe60f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1720127365685-e4b6f23fe60f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1720127365685-e4b6f23fe60f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1720127365685-e4b6f23fe60f"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-black-car-with-a-basket-on-top-of-it-XSftOsyPRZU",
            "html": "https://unsplash.com/photos/a-black-car-with-a-basket-on-top-of-it-XSftOsyPRZU",
            "download": "https://unsplash.com/photos/XSftOsyPRZU/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/XSftOsyPRZU/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 39,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
      
          },
          "asset_type": "photo",
          "user": {
            "id": "EPzz2S_j-3g",
            "updated_at": "2024-07-10T15:31:33Z",
            "username": "svsokolov",
            "name": "Sergey Sokolov",
            "first_name": "Sergey",
            "last_name": "Sokolov",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "Hi, I'm a freelance photographer and a teacher at a technical school. I love photography and I can't imagine my life without it.",
            "location": "Tula",
            "links": {
              "self": "https://api.unsplash.com/users/svsokolov",
              "html": "https://unsplash.com/@svsokolov",
              "photos": "https://api.unsplash.com/users/svsokolov/photos",
              "likes": "https://api.unsplash.com/users/svsokolov/likes",
              "portfolio": "https://api.unsplash.com/users/svsokolov/portfolio",
              "following": "https://api.unsplash.com/users/svsokolov/following",
              "followers": "https://api.unsplash.com/users/svsokolov/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1628968939482-7126bb74354cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1628968939482-7126bb74354cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1628968939482-7126bb74354cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "sokolovsphoto",
            "total_collections": 4,
            "total_likes": 770,
            "total_photos": 179,
            "total_promoted_photos": 73,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "sokolovsphoto",
              "portfolio_url": null,
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": "NIKON CORPORATION",
            "model": "NIKON D850",
            "name": "NIKON CORPORATION, NIKON D850",
            "exposure_time": "1/250",
            "aperture": "5.0",
            "focal_length": "52.0",
            "iso": 100
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "views": 190946,
          "downloads": 3140
        },
        {
          "id": "3RkJ8_tVYV4",
          "slug": "a-woman-standing-in-a-kitchen-next-to-a-table-3RkJ8_tVYV4",
          "alternative_slugs": {
            "en": "a-woman-standing-in-a-kitchen-next-to-a-table-3RkJ8_tVYV4",
            "es": "una-mujer-de-pie-en-una-cocina-junto-a-una-mesa-3RkJ8_tVYV4",
            "ja": "台所のテーブルの隣に立つ女性-3RkJ8_tVYV4",
            "fr": "une-femme-debout-dans-une-cuisine-a-cote-dune-table-3RkJ8_tVYV4",
            "it": "una-donna-in-piedi-in-una-cucina-accanto-a-un-tavolo-3RkJ8_tVYV4",
            "ko": "부엌에서-탁자-옆에-서-있는-여자-3RkJ8_tVYV4",
            "de": "eine-frau-die-in-einer-kuche-neben-einem-tisch-steht-3RkJ8_tVYV4",
            "pt": "um-mulher-ficar-em-um-cozinha-ao-lado-um-tabela-3RkJ8_tVYV4"
          },
          "created_at": "2024-07-08T03:39:27Z",
          "updated_at": "2024-07-11T11:50:04Z",
          "promoted_at": "2024-07-09T13:20:05Z",
          "width": 3430,
          "height": 4800,
          "color": "#c0a68c",
          "blur_hash": "LJJHT]~poz-;~pxaWCayMxM{f5IV",
          "description": null,
          "alt_description": "A woman standing in a kitchen next to a table",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1720409964755-54a8a86feafd?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1720409964755-54a8a86feafd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1720409964755-54a8a86feafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1720409964755-54a8a86feafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1720409964755-54a8a86feafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1720409964755-54a8a86feafd"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/a-woman-standing-in-a-kitchen-next-to-a-table-3RkJ8_tVYV4",
            "html": "https://unsplash.com/photos/a-woman-standing-in-a-kitchen-next-to-a-table-3RkJ8_tVYV4",
            "download": "https://unsplash.com/photos/3RkJ8_tVYV4/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8",
            "download_location": "https://api.unsplash.com/photos/3RkJ8_tVYV4/download?ixid=M3w1NzkzMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3MjQ1OTB8"
          },
          "likes": 28,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "people": {
              "status": "approved",
              "approved_on": "2024-07-10T12:53:53Z"
            }
          },
          "asset_type": "photo",
          "user": {
            "id": "VVBe_HWMfZ4",
            "updated_at": "2024-07-10T07:38:12Z",
            "username": "yoyoand",
            "name": "Zhao Yangyang",
            "first_name": "Zhao",
            "last_name": "Yangyang",
            "twitter_username": null,
            "portfolio_url": "https://www.xiaohongshu.com/user/profile/5af84fb56b58b7733997af5c?xhsshare=CopyLink&appuid=5af84fb56b58b7733997af5c&apptime=1668063861",
            "bio": null,
            "location": "Chongqing",
            "links": {
              "self": "https://api.unsplash.com/users/yoyoand",
              "html": "https://unsplash.com/@yoyoand",
              "photos": "https://api.unsplash.com/users/yoyoand/photos",
              "likes": "https://api.unsplash.com/users/yoyoand/likes",
              "portfolio": "https://api.unsplash.com/users/yoyoand/portfolio",
              "following": "https://api.unsplash.com/users/yoyoand/following",
              "followers": "https://api.unsplash.com/users/yoyoand/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1668063322274-56bc847ef9ec?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1668063322274-56bc847ef9ec?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1668063322274-56bc847ef9ec?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 0,
            "total_likes": 3,
            "total_photos": 55,
            "total_promoted_photos": 24,
            "total_illustrations": 0,
            "total_promoted_illustrations": 0,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": "https://www.xiaohongshu.com/user/profile/5af84fb56b58b7733997af5c?xhsshare=CopyLink&appuid=5af84fb56b58b7733997af5c&apptime=1668063861",
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "exif": {
            "make": null,
            "model": null,
            "name": null,
            "exposure_time": null,
            "aperture": null,
            "focal_length": null,
            "iso": null
          },
          "location": {
            "name": null,
            "city": null,
            "country": null,
            "position": {
              "latitude": null,
              "longitude": null
            }
          },
          "views": 144530,
          "downloads": 1018
        }
      ]

    const dispatch = useAppDispatch();
    const images = useAppSelector(fetchedImages);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch, images])

    const pictures = datilla.map((imagen, index) => {
        const info = {
            url: imagen.urls.regular,
            width: imagen.width,
            height: imagen.height,
            likes: imagen.likes,
            date: imagen.created_at,
            description: imagen.alt_description
        }
        return (
            <div className="main">
                <img src={info.url} alt={info.description}/>
                <div className="overlay">
                    <div className="overlay-text">{info.description}</div>
                </div>
            </div>
        )
    })


    return <>
        <main>
            {pictures}  
            <section className="contact">
                <div>
                    <h2>Contáctame</h2>
                    <p>Si tienes alguna sugerencia o idea para mejorar la página, ¡no dudes en contactarme! Estaré encantado de leerte.</p>
                    <button onClick={handleEmailClick}>¡Contacta conmigo!</button>
                </div>
            </section>
        </main>
    </>
}