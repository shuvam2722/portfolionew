import React from "react";
import "./Work.css";

function Works() {
  const works = [
    {
      id: 1,
      title: "Associate System Engineer",
      description:
        "Campus PlacementsOppurtunity through Superset.Hiring Consisted of 5 round in total.Online Quantitative Assessment,Coding Test,English Assessment,Technical Interview and followed by HR Interview.Click Below to get the detailed hiring workflow and interview questions asked.",
      image: "https://www.logo.wine/a/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.svg",
      demo1: "https://lh3.googleusercontent.com/Whpw_1jpjqzJwhcmr9LqrTS2ztMTgwd-LW0QJJzbxekQDsRKnL4Fh7PkOwccm9uI-sHjbL49KevLW9xMidfwymG2einLKnFepMASQAq6I6s_CbZZr5UYDCjUBkanjhXZxGmXuqPGP6YzKegCTab0PJsANPzvQRPPRcyB-_9fGfS3IYI_CkPx4Y8KLi6jbRVYVAOXFZlkUbPa2qw0ut6Khcag-UsoOKYw6EcPtXcbOwZBn1aiQHqCWvkoPpR2xcY2L1e1aEEOpp560tP6LaGxQVdPO0b7_KikyRLHMlNO0vERae9JUMIAr-tisT9rBBCH7fOiXRzVZzQFi7WekIwCPxdi3klCJuK-Z4tWMXl50Gq6GuksQfRI-Mnpqpgd3XmCj7QwvKHZjI6hsVP1SsyLtKhp7PBu4C92TsIYmrttgitJkO2i9PUYqkeRbxCNg4HRcwjb43YoFJFgKLBTUqRKmReEQIVzWtweYCgGNXu0Xd7Hr0_jszcYIH02GjpFthi45YAynhjMHor72LzGNaJjwVnWmY_-TvQn_-6kn2_VjvRtUCVRhq1-ZYHKH9zOqRYWEUv_SQgGg8Hp8dSuKsSCPzIjK3MTKywc93Dhmw7GIoupHsmfh310dM1CXC37HCH_P4mf4FWJHcVLR_sBd-KZzx34EDAGUKn8kZe0n7Ne9R-3_q4eJRsGdqnZC1-F14UuRKIPyLc-SdIgil1LMLRi2CbPpqbdQ8-qexi0-trR8DpFyY0gAFAIFK52rLVQQmRajpWn9VaR6-_ufjMp0G2uxKYh8P0m0VDo3YzPgMGJWhlpQwYnlmEPxZrHhI9VjsheJpvFn95qaJ21A7PeuR15ukPIOjkOkRi6lr8SIClPxO_tUdVJZ7G8gmwavDaDtXTvF--5X5TyUNuQx-16iOBCB2d3G0s6vBnwp77331nzjIzK0_LeueaVPJB3ci3DHN31185_Kd1iwz1m9kskNezM8XmvalD4sNGttm272ppBqlp1cUP6wHsGeUzvaFmwzW9P5yazySMAJtf44cjGu9CVNANh=w628-h817-s-no?authuser=3",
      demo: "https://lh3.googleusercontent.com/sFfdPUXQg4dEgvSX194VULwa44crvwJxQSnM5pcFC5HJ1JZdHXHaUHZsUHKyJrno9hHgO0vAd_QAd82OPpGYK4TcVALF_QqVPb4M9yY84vMsNhFiy1YJvu7YTDUgvqHk0xrY6tQCjiQ50rurv2aXc4jpf0DpshvcRuCeydjFFIU3-VOzMYGJBEH-xZOKam4KB53-aSU-4v-pVyF7CNLr9O7plSsmS-CrilaE_4pR3dPlMsYfJFtl-AHs_ApkALRpx0opdhocq5kpJRCEPXZmpGR_NPSYBYEL8IicOrxD0YrQhe38B-I1KY3uif1vAAWJQrNl7w2oIw8TqOvEP4M7s405Ubz9zsVDxEIdE2FHvndpxvXo3CxjNXUHAGn3abFSKUM2cNZY4CrkoUb391lxbgP8wy4me3quCb8Qu1hQM5fOWq0ZbEC44xyBVEe27wi-PQRwCNHdgUuNzOrEMWQ0IFAeErKEB8JvEfXxrolmWwDmN1SkxePKlOkUWxH_AjTCbo8MRcTA1_D6RaBWwBwGBICm2GDVlh9LEpweP4ct_p5SZadbMAU_Vh6_Sv-Q359u0Q9zWbKEdAgXck-Snb1ZcePjeIlkgZ0hTvWr_aePq_w-4-e2CZQhoUUo2RzM-lxImHBaY2ARqUdW1P1Gm_HSUGFwcEQiTyrg81cO0ILePMmr1HM-10Raxipl9MfwkomV6hNNmgEaDxw75M53SEyJ8NDcCU6_GcxTJ-xGRwPuDAI6kftt6Eqo0Ukt4TM170vpDdsYRee_P5JW0cYUr-8NgZSL48ztBdPqfCFJn12dsDBF0X7GAVVqlFD1Aiu7MsxNjoamR_OwJD5G3NktUyJ8NLbWQx8uRyCIXpiYj-7y6_e-U1ysPc221bijbkcU7omsS6LPk0Ya9l4Fv2JJD9tlyTC2xPybTAp9ThP55FC8fEyy9-yUNXi9mQf1k4oJIvkDsUEBKCgmKwd4uu6e9-9j8UmePOSlaWrzopz3v4FYEyFFAk4muA3Zpptfl0A-jVuZfkRBvFltsFF885qWeShjk5z8=w1339-h893-s-no?authuser=3",
      company: "Tech Mahindra",
    },
    {
      id: 2,
      title: "Systems Engineer(Digital)",
      description:
        "TCS Free NQT(Off Campus) for 2023 batch was conducted in the month of august,2022.Total Hiring process was done virtually.Numerical Ability,Verbal Ability,Reasoning Ability for Ninja Role and Advanced Aptitude,2 Coding Questions and these all for Digital Roles.Click Below to get interview questions",
      image: "https://s7ap1.scene7.com/is/content/TCSCOMprod/Logo",
      demo1: "https://lh3.googleusercontent.com/3gubKe6b7huMirhibPz6vmWm2fyc5rOqXRT20AAEjk90bA3PzJQYdUaM1cPauyU5KpnWrZ5XgzyO-vK8vUH1WdhcMWk4TTNjVhxKaqW1DRJr2eqVqY7OU6KOQLssglvkRbcJ89tnnl5O23M3qmbzdPoT8qyY9WphUl6mpaEhMt8l9WdQwvP8AqOQo5uE1DXGbIYpJpW71R9Tvqlad21juMHxXQu89BOyzqrEDYtuiJW9-gTvCnTFFCaIDtUgxPpztsi9JAdFZG5xs9EodjOJ4Dx2Hbk8Kxa2f54nkaSXA9DDBLg5otYB85d69TWosV5vaYMU2iDnOG8Bsp2ZLd07f3NEVNKXZBmaNGFoqL6MVj_70AeqJY9qo7UZzEPRjp3nwic3KpbVIaaEfhuS873uxNFXd5xpGdzYUOHFTEiqpJvZIt857OZmrthETQZmefw83dywWy-fUj-27QmdwLqANP1882i5euyIGYVblLle8Go3nrjbJRt9tDp2auJ_MbGNUYzCVS1xOaJYKqVKJRdPbRl1EiuxQ2FtXtcGrFeADPl120mBDZKuM7JLWoUdKURQG6S5Szmmhmr9ixi_EvXVF1o92pOKOKHuIz6vZwuxDFiywzkadHNB16SjbW5jtjlCkfpOWGk8gqHrdeuRmgh0XeVK4O8WbiOzy_aFU6YpmhA1KpXuen36WyolBb4PIWZ9t4XuyH8AW0cMHhp98G9km-AAsKqmOhZWVgHIesKqa8y6tBpeIN5G5ORM3ZcRhhl8PyuXMXgJ_KC5J2DBPYuBQmT3vykXubKZplj94RnVxESEAx932bewMP9pxxduP7DHnYRhnKte_NC5w5_DxA4fDOXp1Nsg1r3c-7mixeY-uE6she8wwogl5DbDxMfSjQaLWdIcml7be8qSw0OA3ln-_UyZv2CY05yA5tGfBWb7T8I-GA49Ykn-IYW-K-RpFw86h17479MFJZAv1BqceLfoyrjIzuk42t-jwhmm2-q94Wu-pA1QYwIMbKhddErdPGZ83kEYeQtLo84CFCH2D6zYDKc5=w572-h816-s-no?authuser=3",
      demo: "https://lh3.googleusercontent.com/sFfdPUXQg4dEgvSX194VULwa44crvwJxQSnM5pcFC5HJ1JZdHXHaUHZsUHKyJrno9hHgO0vAd_QAd82OPpGYK4TcVALF_QqVPb4M9yY84vMsNhFiy1YJvu7YTDUgvqHk0xrY6tQCjiQ50rurv2aXc4jpf0DpshvcRuCeydjFFIU3-VOzMYGJBEH-xZOKam4KB53-aSU-4v-pVyF7CNLr9O7plSsmS-CrilaE_4pR3dPlMsYfJFtl-AHs_ApkALRpx0opdhocq5kpJRCEPXZmpGR_NPSYBYEL8IicOrxD0YrQhe38B-I1KY3uif1vAAWJQrNl7w2oIw8TqOvEP4M7s405Ubz9zsVDxEIdE2FHvndpxvXo3CxjNXUHAGn3abFSKUM2cNZY4CrkoUb391lxbgP8wy4me3quCb8Qu1hQM5fOWq0ZbEC44xyBVEe27wi-PQRwCNHdgUuNzOrEMWQ0IFAeErKEB8JvEfXxrolmWwDmN1SkxePKlOkUWxH_AjTCbo8MRcTA1_D6RaBWwBwGBICm2GDVlh9LEpweP4ct_p5SZadbMAU_Vh6_Sv-Q359u0Q9zWbKEdAgXck-Snb1ZcePjeIlkgZ0hTvWr_aePq_w-4-e2CZQhoUUo2RzM-lxImHBaY2ARqUdW1P1Gm_HSUGFwcEQiTyrg81cO0ILePMmr1HM-10Raxipl9MfwkomV6hNNmgEaDxw75M53SEyJ8NDcCU6_GcxTJ-xGRwPuDAI6kftt6Eqo0Ukt4TM170vpDdsYRee_P5JW0cYUr-8NgZSL48ztBdPqfCFJn12dsDBF0X7GAVVqlFD1Aiu7MsxNjoamR_OwJD5G3NktUyJ8NLbWQx8uRyCIXpiYj-7y6_e-U1ysPc221bijbkcU7omsS6LPk0Ya9l4Fv2JJD9tlyTC2xPybTAp9ThP55FC8fEyy9-yUNXi9mQf1k4oJIvkDsUEBKCgmKwd4uu6e9-9j8UmePOSlaWrzopz3v4FYEyFFAk4muA3Zpptfl0A-jVuZfkRBvFltsFF885qWeShjk5z8=w1339-h893-s-no?authuser=3",
      company: "Tata Consultancy Services",
    },
    {
      id: 3,
      title: "Software Engineer",
      description:
        "Listed in career portal,the Hiring Consisted of 2 major round,First round consisted of 5 quite hard level coding questions and followed by an hour based Technical and HR Interview on Frontend Technologies like ReactJS.Got Offer Letter in the month of August.Click below to get the coding questions.",
      image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_bfcc7d257cff47aae47fb42b7b48fb95/groundtruth-ads-manager.png",
      demo1: "https://lh3.googleusercontent.com/QNdI-ZWT6NF7JfJmkLmQE6w8YdUuVD6synsXKPzbVBCfzTb1T3_CrMHplQCujIOvtXbrhkJfa1VO94oPpDhAPDWWYoxiV75EumPpnxiOWRvY0MvtXmHQ48C3gb9ILucSdwzXrFUHHLrsYBkeo_4oY9yeAu9OmHKJErO5afMDKEACTVjgZWEgkXwyZ7HK4oHbXRuCD35JdYDZxwL6HPNbHm84tZT1A0DiSr4Sb9RwfkovyaoKPt3UkityJZ_klVI_ZNgGZTzEBp4KHkx5HkTmrWHOSxzJfNE-XRHrP3hRXaU9Ewbl29woDq22u3yfihPWhc6OAVqQLkzoJlHg-FiYTLhgaOZebdEyyerJF98Rfj7klx6U6p6uN-hCy4kOX3ntcwjTdjRWhV8Hg4auA_B9WrerXzUyrnlfq_FlNUdryzxSLhrQzViAR7ep68tDQJhgQrE7XsbiaPupbwBgZUm_wD5odjJaz1o7wvuxBYkCHk57l4Do9RPw-Ago-88XfkFqB2deSIuVTMMEf-Z3kY48ShVuGhXzkH1wq7WqupjQq7rTJmuieJthH1V4W1JUFjBo3WYomHf2bXhMUII3cXEVjmWFwvPBQXIjUzCXl_e7eNXYbdvNfCd5klZSlOEsrlS3jUqi1OV2ggyKMiLWUZcIYeozJIsYOE1Y26ZRarQXatmPCkrHoJgqrb0sY7BIdAhO7Kn5_UQycUkJtJ-lrDEBV0QDUUEwCPRtenr6Qtag7p6x27eNvrXPCOYQ1IufXZIDjzlfraRJsFK4Cj-tvLtT4Tv0ucn8-QoWq1-wtKUPIyMmBxUz_uJlft-7sDkt9WLvH6vApzgsEGgmQ0b4JA2zRapTz8Za4N2o0UptQCDeZSvJI9yWhIb4A_yQRy38i1Oi7NEHCiV1OBSq1ottKv9fGPKWOA4Cy80zFldHnEeRgcMZB12pzmxuUDCcQ2NPDW7kZ_yDX2c7K6xv2MD6fY3BL8IWMaLw0AeMA5SbaxcY11LUoS5hobbcvMhzGL3r9RimPc6Z_6ijMFm_vb2I6ugbI8Rm=w476-h625-s-no?authuser=3",
      demo: "https://lh3.googleusercontent.com/sFfdPUXQg4dEgvSX194VULwa44crvwJxQSnM5pcFC5HJ1JZdHXHaUHZsUHKyJrno9hHgO0vAd_QAd82OPpGYK4TcVALF_QqVPb4M9yY84vMsNhFiy1YJvu7YTDUgvqHk0xrY6tQCjiQ50rurv2aXc4jpf0DpshvcRuCeydjFFIU3-VOzMYGJBEH-xZOKam4KB53-aSU-4v-pVyF7CNLr9O7plSsmS-CrilaE_4pR3dPlMsYfJFtl-AHs_ApkALRpx0opdhocq5kpJRCEPXZmpGR_NPSYBYEL8IicOrxD0YrQhe38B-I1KY3uif1vAAWJQrNl7w2oIw8TqOvEP4M7s405Ubz9zsVDxEIdE2FHvndpxvXo3CxjNXUHAGn3abFSKUM2cNZY4CrkoUb391lxbgP8wy4me3quCb8Qu1hQM5fOWq0ZbEC44xyBVEe27wi-PQRwCNHdgUuNzOrEMWQ0IFAeErKEB8JvEfXxrolmWwDmN1SkxePKlOkUWxH_AjTCbo8MRcTA1_D6RaBWwBwGBICm2GDVlh9LEpweP4ct_p5SZadbMAU_Vh6_Sv-Q359u0Q9zWbKEdAgXck-Snb1ZcePjeIlkgZ0hTvWr_aePq_w-4-e2CZQhoUUo2RzM-lxImHBaY2ARqUdW1P1Gm_HSUGFwcEQiTyrg81cO0ILePMmr1HM-10Raxipl9MfwkomV6hNNmgEaDxw75M53SEyJ8NDcCU6_GcxTJ-xGRwPuDAI6kftt6Eqo0Ukt4TM170vpDdsYRee_P5JW0cYUr-8NgZSL48ztBdPqfCFJn12dsDBF0X7GAVVqlFD1Aiu7MsxNjoamR_OwJD5G3NktUyJ8NLbWQx8uRyCIXpiYj-7y6_e-U1ysPc221bijbkcU7omsS6LPk0Ya9l4Fv2JJD9tlyTC2xPybTAp9ThP55FC8fEyy9-yUNXi9mQf1k4oJIvkDsUEBKCgmKwd4uu6e9-9j8UmePOSlaWrzopz3v4FYEyFFAk4muA3Zpptfl0A-jVuZfkRBvFltsFF885qWeShjk5z8=w1339-h893-s-no?authuser=3",
      company: "GroundTruth",
    },
    {
      id: 4,
      title: "Graduate Engineer Trainee",
      description:
        "Campus Placement Oppurtunity,managed by CIEM and sponsored by Superset.Hiring Consisted of 2 Apti Rounds and TR and HR round.Though I could not make it to the company but it was one of the best experience.I am sharing my exlperience,click the link below to see.",
      image: "https://www.logo.wine/a/logo/Hexaware_Technologies/Hexaware_Technologies-Logo.wine.svg",
      demo1: "https://lh3.googleusercontent.com/KGu7HFO3AV-GmkwMCC2FznOAB3YyOPHsdMIYi_YCtOZOQIe2bqQlcuMb1gWzHs6MOCty10HNp8elzgi4vfHjgxwIhCJlfNMPeqyXWElQCSSe09JRh9k6JDM43JHa2eYcec22mnp4QINF3HBd0e_UOb7Dl9_JpuLqUvo2aSXRNs63EmsWvkEDG9vwrbbVqphsXBS2FgHoNWVkLEJcUSoHv-SSH3YVDQYjzCeaz259SLR65tNdDtuKaP7-WsJaDy_gha5WH8j2bXva-zwkoC2qKXlkUgeJZTdfngw_lSXMpbYV4qcyzJCWqvcyB-4EnOin1NN5FfPDr-8SWAIptRfYzrxrp85cjXTYy0gYuphdCCNU5rmLsM3oB4qhjD9VPhiXiO55BJk5ESe2zo3oS7Zap5PqQZ8jFvI6k0r-g3RSBdq4Wx1LDaLLlOLYEbY1ABzd2qFV9OGrbAcz5BhR174jTPgpEUsU_TdK53BqKaNZTxWSKnLinLKN5OMdHixhduiHNXjuww8dQgpSuP7KnXR3urcSApucvTBt48oScgDtCo5HcuBPV2gne7YN86XLkscYMR-2G0dIhNw7RqSmeSZrGOn4p8CViFozQm4lniav66i0LWPHQE5ziOCmH_GclXpaq41z5oiaBqzefhSFAkVUWiEEDG4NrbgSiv9o-ESbAwosgp8v3Iq6ST--CPerVz3KL8Sqt4n21tcj04b0CgHmW2WKk5DuvCimQl_oaFqjP3mpAmQSnPJxYx58xADtrAaXMBXR_XrJmhexKsUxgpeo9KKA-mcyF6j26Ck57y9zmS5zzDI321hRLjkxzEmA24A_OXzpEfyYIX3a2Iz2-qbQ2Nj-e7xFlOX1Un7b3Jb9VSDQHEEr6fR6am7pE5KYuynewofAoKBUf-DzSxtVATJxazndYXIWKRGwK9PcSZrVxd5sS8YBh5XDkDp36Suazkw8LOA3Oy28aHBWehpa_-1DzXJ7t6JmSWUqwVfl-k1VukJrkS1OmZ_estMoXf2aViMRUiuCOdSOWeL_v2f9OP20NPLQ=w1476-h771-s-no?authuser=3",
      demo: "https://lh3.googleusercontent.com/sFfdPUXQg4dEgvSX194VULwa44crvwJxQSnM5pcFC5HJ1JZdHXHaUHZsUHKyJrno9hHgO0vAd_QAd82OPpGYK4TcVALF_QqVPb4M9yY84vMsNhFiy1YJvu7YTDUgvqHk0xrY6tQCjiQ50rurv2aXc4jpf0DpshvcRuCeydjFFIU3-VOzMYGJBEH-xZOKam4KB53-aSU-4v-pVyF7CNLr9O7plSsmS-CrilaE_4pR3dPlMsYfJFtl-AHs_ApkALRpx0opdhocq5kpJRCEPXZmpGR_NPSYBYEL8IicOrxD0YrQhe38B-I1KY3uif1vAAWJQrNl7w2oIw8TqOvEP4M7s405Ubz9zsVDxEIdE2FHvndpxvXo3CxjNXUHAGn3abFSKUM2cNZY4CrkoUb391lxbgP8wy4me3quCb8Qu1hQM5fOWq0ZbEC44xyBVEe27wi-PQRwCNHdgUuNzOrEMWQ0IFAeErKEB8JvEfXxrolmWwDmN1SkxePKlOkUWxH_AjTCbo8MRcTA1_D6RaBWwBwGBICm2GDVlh9LEpweP4ct_p5SZadbMAU_Vh6_Sv-Q359u0Q9zWbKEdAgXck-Snb1ZcePjeIlkgZ0hTvWr_aePq_w-4-e2CZQhoUUo2RzM-lxImHBaY2ARqUdW1P1Gm_HSUGFwcEQiTyrg81cO0ILePMmr1HM-10Raxipl9MfwkomV6hNNmgEaDxw75M53SEyJ8NDcCU6_GcxTJ-xGRwPuDAI6kftt6Eqo0Ukt4TM170vpDdsYRee_P5JW0cYUr-8NgZSL48ztBdPqfCFJn12dsDBF0X7GAVVqlFD1Aiu7MsxNjoamR_OwJD5G3NktUyJ8NLbWQx8uRyCIXpiYj-7y6_e-U1ysPc221bijbkcU7omsS6LPk0Ya9l4Fv2JJD9tlyTC2xPybTAp9ThP55FC8fEyy9-yUNXi9mQf1k4oJIvkDsUEBKCgmKwd4uu6e9-9j8UmePOSlaWrzopz3v4FYEyFFAk4muA3Zpptfl0A-jVuZfkRBvFltsFF885qWeShjk5z8=w1339-h893-s-no?authuser=3",
      company: "Hexaware Technologies",
    },
  ];

  return (
    <div className='works-container'>
      <h2>My Interview Experiences<span>(As</span> a <span>Fresher)</span></h2>
      <div className='works-wrapper' >
        {works.map((work) => (
          <div key={work.id} 
          className='work-card slide-in' 
          
          work-card-aos="zoom-in-up"
          work-card-aos-duration="2000">
            
            <img src={work.image} alt={work.title} />
            <div className='company-name'>{work.company}</div>
            
            <div className='work-info'>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className='button-wrapper'>
                <a className='button' href={work.demo} target='_blank' rel='noreferrer'>
                  Exp.
                </a><a className='button1' href={work.demo1} target='_blank' rel='noreferrer'>
                  View Offer Letter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
