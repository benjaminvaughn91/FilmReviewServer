(this.webpackJsonpfilmforum=this.webpackJsonpfilmforum||[]).push([[0],{56:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var c=r(26),a=r.n(c),s=r(1),n=r(2),i=r(3),d=r(0),o=function(e){var t=e.id,r=e.title,c=e.posterPath,a=Object(i.f)();return Object(d.jsxs)("div",{className:"w-28 md:w-40 ",children:[Object(d.jsx)("p",{children:Object(d.jsx)("button",{onClick:function(){a.push("/detail/".concat(t)),window.scrollTo(0,0)},children:Object(d.jsx)("img",{className:"h-40 md:h-60 border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner rounded-md",src:c,alt:r})})}),Object(d.jsx)("p",{className:"text-white font-bold overflow-hidden truncate w-full text-center pt-1",children:r})]})},l=r(10),j=r.n(l),h={getPopularList:function(e){var t=e;return j.a.get("/api/list/sorted?sort_by=".concat(t)).then((function(e){return e.data}))},getPeriodList:function(e){return j.a.get("/api/list/year?year=".concat(e)).then((function(e){return e.data}))}},b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAooAAAADCAYAAAAUVC61AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA0SURBVFhH7dixCQAgDADBZD9nc96ICDZiIY5wV/0Mn7OqBQAAPHKN0U8DAMDlKAIA8BGxAdpmCe9CzhhGAAAAAElFTkSuQmCC",x=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"w-full top-0 ml-1 px-1 md:px-6 md:py-1",children:Object(d.jsxs)("div",{className:"w-full container mx-auto flex flex-wrap justify-between items-center mt-0  py-3",children:[Object(d.jsxs)("p",{className:"uppercase  tracking-wide font-bold text-gray-100 text-xl",children:[e.name," "]}),Object(d.jsx)("img",{className:"hidden 2xl:block lg:mx-16 ",src:b,alt:"Line border"}),Object(d.jsx)("img",{className:"md:hidden xl:block 2xl:hidden xl:px-6 ",src:b,alt:"Line border"})]})})})},m=function(e){var t=e.type,r=e.query,c=e.name,a=Object(s.useState)([]),i=Object(n.a)(a,2),l=i[0],j=i[1];Object(s.useEffect)((function(){var e=!0;return 0===t?h.getPeriodList(r).then((function(t){e&&j(b(8,t))})):1===t&&h.getPopularList(r).then((function(t){e&&j(b(8,t))})),function(){e=!1}}),[t,r]);var b=function(e,t){for(var r=[],c=0;c<e;c++)r[c]=t[c];return r};return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container w-2/3 md:w-full xl:w-3/4 mx-auto flex flex-wrap justify-center",children:[Object(d.jsx)(x,{name:c}),Object(d.jsx)("div",{className:"flex flex-wrap xl:flex-nowrap justify-center pb-1",children:l.map((function(e,t){return Object(d.jsx)("div",{className:"p-1",children:Object(d.jsxs)("div",{children:[t<6&&Object(d.jsx)(o,{id:e.id,posterPath:e.poster_path,title:e.original_title}),t>=6&&Object(d.jsx)("div",{className:"hidden md:inline lg:hidden",children:Object(d.jsx)(o,{id:e.id,posterPath:e.poster_path,title:e.original_title})})]})},Number(e.id))}))})]})})},u={getMovie:function(e){return j.a.get("/api/movie/".concat(e)).then((function(e){return e.data}))},getMovieCast:function(e){return j.a.get("/api/movie/".concat(e,"/credits")).then((function(e){return e.data}))}},g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsCAYAAACG+vy+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAABYZSURBVHhe7Z1Zdxs5koUjF5KSLWu15d1dM/U2P76f+1fMOXP6obqmq2umplzeZVm7SOYycYEESUlUWCLpMpG6nw0xN4IHEbgBIBdk8te/VYUQQqaSNp+EkClQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBhQIIQYUCCEGFAghBgkf/1bVTTLkVFJnhWS50NJk0rqKpNhmUuhaV7d17X7q3kX0tH8s1Tzl0T/qcGwq0WgqL64tf5PnP2GRUc3zGlDTYnmmSRjO9a6Piy6UhTqoySO2BydQFB5U62w2+tDef60kK31WrJM5LyfyNuPubx9n8vZuW7QmpzMUJudOFRw6/eH8uppKQ+3Nf9UN7rtM2a67LhC11JWiRwcJfLHu0z2vnR0PZ25uBBDntWytVHI8yelbK6XKj6Rt29z+eN9V84GqfqxOXiJiU4gVSXS61Xyl2elvHqeyto9jezqxaqs5dOXWn79rZKPn9PGubf3bqV1ZaVbyUsVxw8vUrl/b/ZKEhuQSaUGODoRFUkiv70W6Q+SW1dk6C3RILOxUcm/v0zk6cNUOtooIe999dFP/6pkbx9BbPkVEkc7NwkqqzpA9aCOqNTopZQlmm/tcuWaOtqsL6hU2ulAXNXf0C6Wer2tqdJUwpa1hnh0XbXFTLVrNA+ua6UtPXwiCWxY6G/59U5equj0t/W4+X7l2xOfQBRoBP5Tv44SnOwdrjuR5sRlM8pznFoJyoWmU+syxiEIPiWWm90zgS8jaT4uf2e7kOIhSoHAxOj2+KRdgCYl6txF2d+JMPxD3q1OWg00JSmWfdnnxvnGZTvxG34j8nc+bNIyE6VArqBWRnQfDNFn1vFHOZ/pkRf6y4h63p0XuVrB4k0elBP4v67LhRH1HNEm0e+iG4UTHK7Li6xdAMOC/50YiFogk2YeqihOzlPpDzO4ptl6e1zXWxME4rptc1SS6EBM0C4RxDEscOpct81RlyGSoEFnRxg3GDgSom9BvP0THfyJPLhfy9q9QvJsjuiXVO4s2fZGLasrboPb3HZQkZFwxqrXzdzZO3f2akYzam9NfZJoC9JsCLqIRxuO6AWC+gvH5lkim+siL5/VsrNVujMx2gDcChy/0hXZ3RHZ2syk04F5Jrsi7QZdSxR1dTWVRzuprKyUuo5m5PakqpBuRwMXxjW6HlJsxC8Qhzc/RPJwM5EfX5XydPdcHeRP/16m1u5TnvVVDKfS0U+cakmklPurff2epsdoPXD9A1HUu7W1Z7AmQCDAWSyc8Nh8IPIfPxbyfPdMuvnA2exmlHJvBXYcaFI7qtjgGzfKgfpcsPE2jYH4LhSqn3qdSl49K+Uvz0UrNYyOPRcHnrigeHom8uVIxydaQmwOdbyr3bENrQArvVrOVB8Hh/o99eP6msi9VRl3CxogDh9dL/5GGwhlA1fKpZthb9jx4FjcSRCAw6Yc6v7Atg8m7DjOHymRo5Nafv6llHd7uW7P8K2lpnUCAcEp11dov9+dqVLCMd6R4/XA1/OLl1A2EMo1uQ34VvQmZfbf8+lifrhwiDzGAuno9uUXSEu6WFdJdYR52eEXk9vl3R62uS3kMrDVVftNSzjaiykEkpCccV3y+2MhfoGorcdC8CkAp5Xa1/K3UtRSjJL3lX5RKk0lPnW7o8nrLhAqNgg29GB5HGCsW21gt2BfJBwLRsJo0DX3NzbiFwgquzoGwB+TfoaDMm1JUMhMl/NRwr1GGIymkunevNbPRJcmrvbeZVB8nOKF/dASI8HGodJPpnAXA+yLhG3TcA1HhLR2DIJIVpYa1cpSv1NNd1wjLvxDJYCYsixzKZy9Au6YSxWkDYRygcky+e3+E3YsikIKtSNsdB3OPvoPx+S5t2MQlv8NJA7SvznTBeKdCydj/8lpLR8+VrJ/WMjZGa4K4xj3/wq+ImgLk9Wy0ktlezOXJ48yebA2fl4hOPmuCAQnL07P1IZ7tRwdl1qpC+n3R2aeCrLB/l5HZHsrk2ePO86GGJxTIH8iVwTingfBnkSG2mLs75fyf38k8v5zrpEPDnJfuxHwY69byfPHpfzwElfmcWbrYh7tFohfP1Nx/P62kl9/z+W8Pw4UN8FnV8nmg0L+7ZXIk91UOnj0A/siFMgtir6kqENwLRBR71wd+3EvlU8HmWs1bluPcfxw6KPmubY8GG+2RAsmEEUYiDs79gs5PqncQ2hTm10Db69UTs4y+bSvLdFpc6E2UjtGLxAELI17LnLhGYZBoU4uZ/cHnkQ86+dyeo7ns31EDVG27aCY3p4hzV6r0dLjwiIu0kIiIc/YiL8FaYArg0jgnJnREDjUrtnxaaoO1lzdBa52g6gfYoCThDubN3vVQFZofUttxZGgkFjNGLVAxjZ3bnVgaby2CPyYo82tCO6/cmOQJnXyVHq9TDWi6zMUe+wDtRtsp0tIfltctKYFcQTPLMAT46x8Zm0ZmE8lFLZRg7uu0dyFOy8h60Xk9T2IWiBjo4f4tGA3xOzZW4D5qyZbSHdlXPup4y0z4GynOUTeRW1XC7IIgj/vgDACvshNwVUchQ7kBoPSLc8CvjXbN5eP6AXiAtUdifTfFNwL0txIWA5rGQ4q14rM17OM3zHRC8RFqzaFrO+Evx3dd6uyTipdHaTjdptZGpGxLOJ3TOQCCa5YYJQKWQW/ag1p+3UQFDlc88BfPJmJx40XcWIiSCRWC0YtEB/v0A3QTyRcAPGb5sZlsYB8YgDFnJSCuzMBV9HnDgw4E+bPhiHFaM5WDNJHXaz5A94FRtlqJG19K6K2Q8KtJrjN5OCokgIX+Oaw6YLd8V2IWiDj2NQk5+VmdVaCDi7l0errIAr0j6vfeEZ/7yBRkeTaitzuZs9J8DVMHOfm+NUVF2jcnriIvAVBz7npPasjMNXPSidxr0OYNd7jXSBr90rZXte8unE6dVZw1+5KT9y0SetrhbPFrA0nfNDr+al/Yo4t8Xex1Pj+QcBEVlcSebor8vQhhII7U5tjbggqQ1dFsb2ZyPoDPPiDrlX7JQLb+RbST520tZ7L7iMtv9ritgLB8Vnq3wfy9FEta/dRycIpAA+yxDo+b5n9n078AnF4B2dZKhvrqbx8Wsnjh32NhgN12NdVAqfiuJXuQHZ3kHRZox/yvCvzYnmB+Irb6yayuy3yTG14b9XPG3YTYCGIY3sT71ap5eGWisydKm5OFzcpiAOf/leXl9Y9UegcrcfguNNzkcNmXizroR84r+OmLsWsgv7YScdBHEgh/1CZYieUC0wrE1rgkzPR8Yi/df1rD04FO6LVcPNiwRXBduoU/MUDU//4Vykf9nIpmwemltmarZ4XKzD5fLkNvndVBCMnN9sn98XMpJ2mldfvasrtF72tg2mxfMUUl3Zi1WWk+el6bAJpSRfLAo4O09Z4X01LiJb4bEndXwiTtrhsr+sS7Bhs6UAeqGVIWI7MvvELRA0eot+ko4JzJ7dNS3BmicngXajzHmxLC/E1XMswsh3K78E2zEgS9mOfe+OUHoqj3GdY1j+TCYTvIYHJfQGsYq8/YnmJXyDO+N768Id3DJzrp53BwD1N/TK6WpcTTkfmue9GwF3oYl2IgHeYsS1xRg9TI1213+UUhOHtOQHs2aRlF8UkrR2DYPKFg+NSPu/rAHOge0MTfwnk11WR7GzU7tSuuwdpFD39Mb571r4xCAhlA5fLhe1FUcmXo0L21I59PIKs4LDLFnA56PEr3UQebqf+NLkGp1H+7jeaWU10DMJpf74RVwTSvAba4+fFOj6u5fc3Q3nzIZGzvv1SfOc3wUtzSnm0XcqLJ4lsb2bq3GYA6bK+ewLxt5zU8uZ96V4JfXyaB2NcC7LJMtixkh9fqR23tNXWr1wWCAbp7zntz58EbK/OxOWO4bCSj5+G8vOvpfzvm66cnvf0ALuI8Dm6EH0V0uu3Xfnpn5m8eVfJYIi5/ud7T19s+Kl/8GrtWr4c1vJf/6jkv/8nl+MzDTI3CAo4pCwzefchk7//jCBVqB3VMbjdJLTgX89mqYhfIA0qETnvYzbARPa+ZNo1QKRvdt4Af2yqlSHR6Fa72RmbwOpoU6sxDVdULSLK3NfY8PkQM7vkbhqk2+DMpAHn9DyVj/vaCp2q6KARv9sRkyWjFgicOkr6B2dahhr08TkLPgJqd+JEK8cJ8gm5I3//eRfASYpCO97zFBmiKHTMgml/nBX1T4wWbEkLgktQ3gnznoHCG3IHw0z7ytrtGvjrv2H80WqaGgzToYuFib/dygy4PPQPgk1ZebvFar6oBTK2+cWlxfrCD8pb34JcMtw8NnRZuT9qMySYDovYGRmtaEGcM1AS55Qmzck4K59Z61sQZVzekOan0YZLMdIKgbjo7pryxTh1xDfIcmkJl8YVL5LFVOlgwljN2JIxyAIJ9SJWj86I7xL5MdewLHX8hRcPzSYSfGsx8vr+RC+Qxq93rkIvArS8IY1qdaWD66KUwaA5PbsQu8brnOgF4vwanLsIgi9DnovKd8kZFVfLD1HgRgJ8zlJ8mDCY0ROvEdnFuoZRhWmc2+azWKjMvpw+4V60NNOq4XfMxTjXOIlaIMHo37aL5bsgbT6LhatIqSYUETO7L27iOAz3x+fFYhRJe1qQRdXfkeqaz7tCU160JLiDoBj6h8zuOlELJNRh58eJ20LmIqk1emLqn0q6XcRWRNa2q8W3ki6pHQf9Qs7PC3dFfZaijz1xcSlGK0bfgsDozvDoGqSYhwkza2DD7YHQOnklW+ulbKxpNwP3akfp1tlAIMBbpbq9VFZX/ANmszQisFiuPsDMMJwXaxlQD6Aur66I7O6IbG+U2o9GRGz23wAcmqaliqOSF08yefDAv4IsOLfVg3QIoykoxiKrvVzW1zuSYVqSWwIzwY6b64WbF2v9ftwtcDsEoqD6Zjkedkrl1fNatjaGKhr0o/3+68B+PAPR7fTl8c65/PCikM1NzHCOQSrME69zb4OvxJjiLdVWNJGdzVpe7J5rwDhRWwxcd+trODvmA3myM5AfX9XyaEdb9dztcftjpJXzYuGOXjcn1qEIntdxPaVrQH545PbBmp/LKZ0SMkL/POTvK1P8hHKBqWXSXbDP6ZnIwTHuzvWbLx/qctA/o7nFtCVvHsic+A2k5pHbX/jI7TdjukCwZ1xx4RDcJoEbJ/yuSx69wNh5k3NiTVaY4ORp+2JmXHlhoqvlDcv+5To3K7M7HsdO2Mnn5fOITSCt6WJdJrgTgoJ/rk8QRupaHXKRIJQwdeiNU/P9NhC/QHywUhpnuqUgkCCTm4BjQyLz0paWNn6BNFELFRsO8e/4xq0SYS6smyWcscFpTYpkjLPnFFvdJLVBHKBF0/74z9AtwCOjh8elfPrsJ3O4rtLjWHBvJZGtrUTW11LpdrILDg55YltIbSCUC4QyhXWctTo4rmTvcyVn5ziu0mN8PMUhSJNm8Ou1u/axs+nnxcLtKi433YnxIP5ykP6N+dogHY46Pq3l9btC3nwQOTmx58XywHWVrK4W8uSRuOsg62uInnB66H+3XyBhHWOOo+Nafvqlko/7mdocV0duSuleQPRsV+TJbipr99Gi+9+AjzhI/x44+9fSHxTy+5u+/OffC/nnrx05Pv76vFgexLdMTk578vot5seq5fQMo3ZUFn9Em0EZ0WIEgZyelfLH+1L2DzNtiW8jDoAJL7ry25tc3rwX6WvrE7MR2yEQrchoWU5ORd5/RJTKdAsifbP7pujxw8K/xPK8jwnUmu1KW1qNaaBr5FsSvJWr0hZ4KPtfChlqN3XWYpdl5QJWUZbOF7EStUC8S31yLtAFCAXrs4A8ME3NyXnqXhxTILMmN1+B2gmK5m8aUAvoQqoJk35riPEHzADyLEpNMFu8+mhHCzKKcvDv3M5IZTjM3ORxg2vmxQpdkdjTJGEVJ/I63Uy6K5m76fPSYTcG4xjMi1VpmjWPZSBKgaCqTtrcOUATIt63OsV4XcVqF2o3tR0emOp2tGrMaEdYCL1TtMZu4jjnm8ZJmvAv+BBpmYm3BVHLoq6GSlthQ6qGn92vF3DOGwkCn26zI2xvQ3LAXhiHeCuq/bSLhUDjdt4e9z3NCNlj4gf3qcnd8Bh+MxIiFggcjLt1fcKI2s3yHrwxFz6PUIn8naw62Jz4vVYl2E4H1aPU2HIenOYQWCC6GrbTAYn71PXmnz9muYlXIGpZdKWQ3NVbd3t6MPl8ZkfVgMaQCwas/sEhnLOHufxvtivBdt5+SPPaD+DayaDIdTzn35LuXkqEW3xxcQn56xglBqK8UNjNK3m4VcrOVirdrncqIv3pWS3vP1VycIg3G83W14Iw8qySnc1SHu6kstKLN4bcFpQddsQbufaPEvmwJzIc+Aums9Dr1vJwu5btDUwCoRs0b9zV8PpdJYdHKhb0h5ec6ARCyJ/J3QmPhMwABUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCiAEFQogBBUKIAQVCyLWI/D/lJpTP/3gzpgAAAABJRU5ErkJggg==",A=function(e){var t=e.review,r=Object(s.useState)(""),c=Object(n.a)(r,2),a=c[0],o=c[1],l=Object(s.useState)(""),j=Object(n.a)(l,2),h=j[0],b=j[1];Object(s.useEffect)((function(){var e=!0;return u.getMovie(t.movieId).then((function(t){e&&(o(t.title),t.poster_path?b(t.poster_base+t.poster_path):b(g))})),function(){e=!1}}),[t.movieId]);var x=Object(i.f)();return Object(d.jsx)("div",{className:"w-1/2",children:Object(d.jsx)("button",{onClick:function(){x.push("/review/".concat(t.id)),window.scrollTo(0,0)},children:Object(d.jsxs)("div",{className:"flex flex-nowrap h-48 rounded overflow-hidden border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner",children:[Object(d.jsx)("img",{className:"pt-0 w-20 h-20 lg:w-auto lg:h-auto hidden sm:block",src:h,alt:a}),Object(d.jsxs)("div",{className:"px-6 py-0 mx-auto  ",children:[Object(d.jsx)("p",{className:"font-bold w-full overflow-ellipsis text-xl ",children:a}),Object(d.jsx)("p",{className:"font-bold w-full overflow-clip text-blue-100 text-md mb-2",children:t.author}),Object(d.jsx)("p",{className:" w-full overflow-ellipsis p-0 text-gray-700 text-base",children:t.content})]}),Object(d.jsx)("div",{className:"pt-20",children:Object(d.jsx)("ion-icon",{name:"chevron-forward-outline",size:"large"})})]})})})},O={getReview:function(e){return j.a.get("/api/review/".concat(e)).then((function(e){return e.data}))},getReviews:function(){return j.a.get("/api/review/").then((function(e){return e.data}))},createReview:function(e){return j.a.post("/api/review/",e).then((function(e){return e.data}))}},f=function(e){var t=e.name,r=Object(s.useState)([]),c=Object(n.a)(r,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){var e=!0;return O.getReviews().then((function(t){e&&i(t.sort((function(e,t){return new Date(t.date)-new Date(e.date)})))})),function(){e=!1}}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"md:w-2/3 mx-auto flex flex-wrap pt-4 pb-4 pb-1 justify-center",children:[Object(d.jsx)(x,{name:t}),a.length&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"flex flex-nowrap w-full gap-x-2 pb-5",children:[Object(d.jsx)(A,{review:a[0]}),Object(d.jsx)(A,{review:a[1]})]}),Object(d.jsxs)("div",{className:"flex flex-nowrap w-full gap-x-2",children:[Object(d.jsx)(A,{review:a[2]}),Object(d.jsx)(A,{review:a[3]})]})]})]})})},p=function(){return Object(d.jsxs)("div",{className:"bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-white pb-8",children:[Object(d.jsx)("div",{className:"py-4"}),Object(d.jsx)(m,{name:"Popular now",type:1,query:"popularity.desc"}),Object(d.jsx)(f,{name:"New reviews"}),Object(d.jsx)(m,{name:"Popular 1985",type:0,query:"1985"}),Object(d.jsx)(m,{name:"Popular 1895",type:0,query:"1895"})]})},v=function(e){var t=Object(s.useState)(""),r=Object(n.a)(t,2),c=r[0],a=r[1],i=Object(s.useState)(""),o=Object(n.a)(i,2),l=o[0],j=o[1],h=Object(s.useState)(!1),b=Object(n.a)(h,2),x=b[0],m=b[1];return x?Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"flex mx-auto bg-gray-800 items-center justify-center shadow-lg  mx-8 rounded-b-md",children:Object(d.jsx)("div",{className:"text-gray-100 text-2xl pt-8 pb-16",children:" Thanks for your contribution! "})})}):Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"flex mx-auto bg-gray-800 px-5 lg:px-0 items-center justify-center shadow-lg mx-8 rounded-b-md",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r={author:c,content:l,movieId:e.movieId};O.createReview(r).then((function(){a(""),j(""),m(!0)}))},children:[Object(d.jsxs)("div",{className:"mt-2",children:[Object(d.jsx)("h2",{className:"pt-3 pb-4 text-gray-100 text-center text-2xl",children:" Add a review for this movie "}),Object(d.jsx)("input",{className:"font-medium rounded border border-gray-400 py-1 px-3 text-gray-500",value:c,onChange:function(e){a(e.target.value)},placeholder:"Your name"}),Object(d.jsx)("textarea",{className:" rounded border border-gray-400 leading-normal w-full h-52 py-1 px-3 mt-3 font-medium text-gray-500",value:l,onChange:function(e){j(e.target.value)},placeholder:"Type your review here"})]}),Object(d.jsx)("button",{className:"bg-white text-gray-700 font-medium py-1 px-4 mt-3 mb-5 mr-1 border border-gray-400 rounded-lg tracking-wide hover:bg-gray-100",type:"submit",children:"Submit"})]})})})},w=function(e){var t=e.id,r=Object(s.useState)(""),c=Object(n.a)(r,2),a=c[0],i=c[1],o=Object(s.useState)(""),l=Object(n.a)(o,2),j=l[0],h=l[1],b=Object(s.useState)(""),x=Object(n.a)(b,2),m=x[0],A=x[1],O=Object(s.useState)(""),f=Object(n.a)(O,2),p=f[0],w=f[1],Q=Object(s.useState)(""),I=Object(n.a)(Q,2),C=I[0],B=I[1],y=Object(s.useState)(""),N=Object(n.a)(y,2),U=N[0],E=N[1],F=Object(s.useState)(""),V=Object(n.a)(F,2),Y=V[0],P=V[1];return Object(s.useEffect)((function(){var e=!0;return u.getMovie(t).then((function(t){e&&(i(t.title),A(t.release_date.substring(0,4)),B(t.tagline),E(t.overview),t.poster_path?h(t.poster_base+t.poster_path):h(g))})),u.getMovieCast(t).then((function(t){var r=[];t.crew.forEach((function(e){"Director"===e.job&&r.push(e.name)})),e&&w(r.join(", "));var c=t.cast.length;if(c>0){var a=[];t.cast.forEach((function(e){a.length<3&&t.cast.indexOf(e)!==c-1?a.push(e.name+","):a.length<4&&a.push(e.name)})),c>a.length&&a.push("and "+(c-a.length)+" more"),e&&P(a.join(" "))}else e&&P("N/A")})),function(){e=!1}}),[t]),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white ",children:Object(d.jsxs)("div",{className:"py-7 ",children:[Object(d.jsxs)("div",{className:"text-center md:text-left w-11/12 md:w-2/3 mx-auto py-9 px-9 bg-gray-800 grid grid-cols-5 rounded-t-md ",children:[Object(d.jsx)("div",{className:"col-start-1 col-end-6 md:col-end-3 row-start-3 md:row-start-1 row-end-6 ",children:Object(d.jsx)("img",{className:"shadow-2xl md:mt-8 rounded-md w-3/4 mx-auto",src:j,alt:a})}),Object(d.jsxs)("div",{className:"col-start-1 md:col-start-3 col-end-6 row-start-1 row-end-3 pb-12",children:[Object(d.jsxs)("h1",{className:"tracking-wide font-bold text-4xl pt-6",children:[a," "]}),Object(d.jsxs)("p",{className:"pt-2 text-2xl ",children:[m," | ",Object(d.jsx)("span",{className:"hidden md:inline",children:"Directed by "}),p," "]}),Object(d.jsxs)("p",{className:"break-words pt-1 h-16 md:min-h-24 ",children:["Cast: ",Y]})]}),Object(d.jsxs)("div",{className:"rounded-md mt-5 md:mt-0 col-start-1 lg:col-start-3 col-end-6 row-start-6 md:row-start-3 row-end-6",children:[Object(d.jsxs)("p",{className:"italic",children:[C,"  "]}),Object(d.jsx)("p",{className:"text-left pt-3",children:U})]})]}),Object(d.jsx)("div",{className:"w-11/12 md:w-2/3 mx-auto",children:Object(d.jsx)(v,{movieId:t})})]})})})},Q=function(e){var t=e.id,r=Object(s.useState)(""),c=Object(n.a)(r,2),a=c[0],i=c[1],o=Object(s.useState)(""),l=Object(n.a)(o,2),j=l[0],h=l[1],b=Object(s.useState)(""),x=Object(n.a)(b,2),m=x[0],A=x[1],f=Object(s.useState)(""),p=Object(n.a)(f,2),v=p[0],w=p[1],Q=Object(s.useState)(null),I=Object(n.a)(Q,2),C=I[0],B=I[1];return Object(s.useEffect)((function(){var e=!0;return O.getReview(t).then((function(t){e&&(A(t.author),w(t.content),B(t.movieId))})),C&&e&&u.getMovie(C).then((function(e){i(e.title),e.poster_path?h(e.poster_base+e.poster_path):h(g)})),function(){e=!1}}),[t,C]),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white ",children:Object(d.jsx)("div",{className:"py-7",children:Object(d.jsxs)("div",{className:"text-center md:text-left w-11/12 md:w-2/3 mx-auto py-9 px-9 bg-gray-800 grid grid-cols-5 rounded-md",children:[Object(d.jsx)("div",{className:"col-start-1 col-end-3 row-start-3 md:row-start-1 row-end-6 ",children:Object(d.jsx)("img",{className:"hidden lg:block mt-8 shadow-2xl rounded-md w-3/4 mx-auto",src:j,alt:a})}),Object(d.jsxs)("div",{className:"col-start-1 lg:col-start-3 text-center col-end-6 row-start-1 row-end-3 pb-12",children:[Object(d.jsxs)("h1",{className:"tracking-wide font-bold text-4xl pt-6",children:[a," "]}),Object(d.jsxs)("p",{className:"pt-2 text-2xl",children:["Review by ",m," "]})]}),Object(d.jsx)("div",{className:"rounded-md col-start-1 lg:col-start-3 col-end-6 row-start-3 row-end-6",children:Object(d.jsx)("p",{className:"text-left pt-3",children:v})})]})})})})},I=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),r=t[0],c=t[1];return Object(s.useEffect)((function(){var e=!0;return O.getReviews().then((function(t){e&&c(t.sort((function(e,t){return new Date(t.date)-new Date(e.date)})))})),function(){e=!1}}),[]),Object(d.jsxs)("div",{className:"bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white",children:[Object(d.jsx)("p",{className:"text-center uppercase tracking-wide font-bold text-gray-100 text-4xl py-16",children:" Recent Reviews "}),Object(d.jsx)("div",{className:"w-full mx-auto",children:r.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"flex flex-nowrap justify-center gap-x-2 pb-5",children:Object(d.jsx)(A,{review:e})})},e.id)}))})]})},C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white",children:Object(d.jsx)("div",{className:"py-7",children:Object(d.jsx)("div",{className:"grid grid-cols-5 rounded-md text-center md:text-left w-11/12 md:w-2/3 mx-auto py-9 px-9 bg-gray-800",children:Object(d.jsx)("div",{className:"rounded-md col-start-1 col-end-6 row-start-3 row-end-6",children:Object(d.jsx)("p",{className:"mx-auto pb-4 text-left my-20",children:"Welcome to Film Review, a place for browsing movies and posting reviews about them. This site was made with React, NodeJS, Express and a MongoDb database. It's mostly for show and to let me experiment with React. Movie lists and information are fetched from The Movie Database (TMDB) API and reviews are stored in my MongoDb database.  "})})})})})})},B=r.p+"static/media/tmdb.caee7457.svg",y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bg-brdr-pattern h-4"}),Object(d.jsxs)("div",{className:"bg-black text-white p-8 text-center",children:[Object(d.jsx)("p",{className:"mx-auto pb-4",children:"Created by Benjamin Vaughn"}),Object(d.jsx)("p",{className:"mx-auto pb-2",children:"This product uses the TMDb API but is not endorsed or certified by TMDb."}),Object(d.jsx)("img",{className:"mx-auto pb-4",src:B,alt:"TMDB logo",style:{width:400}})]})]})},N=r.p+"static/media/filmreview_logo.bd90da3b.png",U=r(9),E=function(){return Object(d.jsx)("div",{className:"pb-3 md:pt-8 pr-8 ",children:Object(d.jsxs)("div",{className:"pl-6 text-gray-100 text-xl font-semibold space-x-3 tracking-wide",children:[Object(d.jsx)(U.b,{className:"lg:pr-5 px-4 md:px-2 lg:px-5 hover:text-gray-300",to:"/",children:"Home"}),Object(d.jsx)(U.b,{className:"lg:pr-5 px-4 md:px-2 lg:px-5 hover:text-gray-300",to:"/browse/reviews",children:"Browse"}),Object(d.jsx)(U.b,{className:"lg:pr-5 px-4 md:px-2 lg:px-5 hover:text-gray-300",to:"/about",children:"About"})]})})},F=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"bg-black p-1 flex flex-wrap justify-center md:justify-evenly lg:justify-between",children:[Object(d.jsx)("div",{className:"w-96 py-5 ml-2 sm:ml-6 md:ml-22 ",children:Object(d.jsx)(U.b,{to:"/",children:Object(d.jsx)("img",{src:N,alt:"Main logo"})})}),Object(d.jsx)(E,{})]}),Object(d.jsx)("div",{className:"bg-brdr-pattern h-4"})]})},V=function(){var e=Object(i.g)("/detail/:id"),t=e?e.params.id:0,r=Object(i.g)("/review/:id"),c=r?r.params.id:0;return Object(d.jsxs)("div",{children:[Object(d.jsx)(F,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/detail/:id",children:Object(d.jsx)(w,{id:t})}),Object(d.jsx)(i.a,{path:"/review/:id",children:Object(d.jsx)(Q,{id:c})}),Object(d.jsx)(i.a,{path:"/browse/reviews",children:Object(d.jsx)(I,{})}),Object(d.jsx)(i.a,{path:"/about",children:Object(d.jsx)(C,{})}),Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(p,{})})]}),Object(d.jsx)(y,{})]})};r(56);a.a.render(Object(d.jsx)(U.a,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.670457d6.chunk.js.map