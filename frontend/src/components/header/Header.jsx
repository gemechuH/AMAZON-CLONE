import React from "react";
import classes from "./Header.module.css"
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png"
                alt=""
              />
            </a>
            <div className={classes.delivery}>
              <a href="">
                <div className={classes.delivery}>
                  <span>
                    <IoLocationOutline size={20} />
                  </span>
                  <span>
                    <p> Deliver to</p>
                    <h5>Ethiopia</h5>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <FaCaretDown />
              <option value="All">all </option>
            </select>
            <input type="search" placeholder="search Amazon" />
            <CiSearch size={30}/>
          </div>
          <div className={classes.info}>
            <div className={classes.country}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAACiCAMAAADiKyHJAAABOFBMVEW/CzD///8AJ2j///68AB3jr7X04OK7ABP7/f/flqK8ACG9DDG/AivDHjz9+PjagpDFLEa+Ci3wytDqusH35ugAAFzf4ecAJ2oAKGcAI2nFCCwmI2IAJ2wvSXsAIWUAKGQAAF4AG2MAH2QAFmIAAFEAAFYACF8AIWwAEWMAH2wAEl4AAGQAF10AGlwAIF8AE2YALG7u8fGrt8pacJEAAE3k7/D1+fBzgZ5qep5CVYcXNGsAKmDByNejrsHS2eMoIGUlPHCLlbGhqcZRYIcdOG9fdJMSMW+jt845VYTG0uCBl7Xc5vNkeKDF1d0SMXuWn7bj9PFGVJAsRX9QZJU7V315jKKluMeMk7cqPHw9R3aWqrpvhaiMpL9daZAAAEIwTXlIZYXJ3No2RYW9yd+asdKBnLBif6O8ydBH/zkFAAAU20lEQVR4nO1dbXfiOJaO5Jkd79vMvoyRPC0sbINtHAIxlEN4c0NBKCBhmUlCpicJk+qp7cn//wcrydgWVf1hl95zcuLj53RVdS4yPnrqSnru1ZXqBEpACGN4FAj5vz+Dv/vDyTvGcUT9fyBHxJ1jhL7qHfrWlRD5uhEj4fxbG/rmyw4fzQVxrD+ENj6eY0jgfrTy/4WQjhoYygQganWnxgFpSKf2R5PEXxO3wRg171ZNBA/JMzfzjM9cEMf7XHeUKxtDShPioK7bNxctQ5f7TnQt2ni6nhKCWXt9DsYu8yac+BrRiTOKnAMP03VdU3dmvojDdEb1K/DawLNk0BE4n1F/CKZ4MMu6P+/TGSg1cH+eMT6j1gb8VB/MaOKsaD4fOCEYwHnaDKLZHN6Boc3elCfi3Cs1UBX26xNMF1bSVgMFqEHQsRKTsQgDZgvU5TwhE1ur/aOrekIc6S/Zo0oQXC+ayaPWTcCagVD9iFF+iEO49XKtKEBZ1dxMkVRWzATCcis1Yet8DQBQ2pVsqBKvw7hUgo6DSWLS/QdmUtbUyJy1Xg7Zo2Cl5Wmo6pi2rlivhlo6x3F8WDLbrkGz3lP6X8wUakbGJcWVEbNtTmE2VBHWuLPeWtl3QWTfsGbLCs0TcRgRvw1e1YtzJAkQvQGCV/Dg4cxEW1uwLoFFPSWOLQBaCB6Uko8kGWwsQCkCWxtl/kudNhiqKskVcQxmeFmZla5kH7G60UzrXluZwyHkLZ+d+uvjmexK43Cq9f44lkVKa/Ra1x6HfjZjQvfDH7vaOOxYyYDOB3FoNrYHyOztey+4cnuegexyX6eJCSN67xDqLfaaQvyOerhOrfltbIq/YPAnD0Jn0Yw9TtjQ/NZ2Db/npqvqb371fpF5HEJUp/qet1ux8nHpi2HcUUJvhQUzFglry5+gbhkTzgzhulk4EjbKYj0gTUwoacbjntnEZ+wxxnzicGj263eMn49V7c2l9bXNWTtfWbB1N2roX6UFnIfyN4mC1rryMy/Ry+Ad42eIQ5allYaaJU1t0LDMnrKzLUNuBisPgdM0DLmZZSqThis3Mwz/SZmb1kGYlkviytPeTgnuF9Ny5lvT6WIEHsq96XliojNmC8HN/bSXhWS93mILItasn5CO+tNeeQ02ven065A/d8TN1vFHQ5x21eqoTPWy/y7NtNvGQ9wsGqfEoRcucVm7TaZ77UlsCqdfu1zuiEPOn7nq7zqSi9j9iHU/+iHlDQ6Qc6MyRjZ+JvyQ0WqzJ4OplzkhbfQC1mwoxxD5Iw4z9UAQHTMPUR0x7TOvQ1x1aCMeaFWzqIKJ3WrAbAuTS7WElDMWfiilWhpD8HZVHn5sW98k53JEHBGpN9TagM0D6Jp8qLLgif9OnSDshoHtCi5jDqw7MNyAkc9pS2ILZ6hsl+AvsW4T7RA0QPSkRo74azhIM+WGOGSQARtj1P6yc5xu2xYKrcklG3bvh7jVHO5E75tx9+3HSc2fLtniizCNl2BEl2XHGa3OeAtsCI1nPo1sf7wUMyE1pUgiH8TxftvPTNyysUoNk2CTcgeEzecWZbzo8wYbw35fxxiaNwtDbOpgm8LWgHFEkf1sixE9N1n0b/cxF8r3TybzMEz6NoGGMWcmbK/6aYY5H8QxryGkpu6aKYt7H+wEJuTp3nh4IuTqUIs2duY3fGMMUwTGdRZEpHsWLGxojYYeM5B9WMbfANkbDOKSHBGn07OaNgXtquanCgxip1JrgxetZqU04WZF80BJ0yqZuCC2VtuCba3GYt3EhD5ofw3VqqZZGcVWRSuDh1rFi1cYrL+8ded/CZK0Un2rBoFyEVy8zvcOQeB8GTAlEQTBNlUhVof9yATHRek2JdgasceAGqiP9dRVy6W4WZglj81VIL7uYrnnkoz/4x0jXRy8XcAV7qiWBZ+owTWIEuy8LN1rv5S4nB1KgRbyt1zQqVstNUGLDgEXJmU7EzDsDfzR0f7bMP7uN+8Y2arqcAk2rBGSDS4mwZgU7ng0k7jQ6LNmQe1gx7A2UhSeAZag+6GiKGOTSjnQyhUjbllNxHFO8nHQewCREuhQEgywxiIq5iLSUsAzwKUAvBzET1oElkrky2QaZRCWQNfKwjbmmW32bQFJyixyQhyyg0m1LG1oMViX4Yu2Ce1BGkER6i3bDoo2JuaDbb/W9tVd7Uody8S1HiOkPQx9wocqETl1pIUTbRHs6jkjbnzv0Xr/TnYl9zOsY+9uHu8SiN8o2XlM8XXiyDOmAPXKLWq/lGXi6M7Xdf8u1sp7pvpTjxiU2XJFHER1nv/d+9Z5nLLVEUWIrRai58JrdKrz8EqoDASbcZZJd6kODXfvlII/wrfBkElQHPCK5iwyYT6qJ7NeXoiL+4ZFuGo9TQ02rSMRvqO4542PPox/FPEr44fg2z+bLK4QQ5bTRXlw8Dzn4QeMK05EtMtWZx/FTZBUTZIX4lL+kK6fvo48eXlltuYPF7euLq2RjGJv86Om47SoDiGCSCW4NIkcyyNk7lRkfFu6lC/imDfNqTFXS35zMM/6OseNLdj4sA8lk+FHatmi/YzgPjWnYOgbUskI7kOvDXam/GgeieNbydcB02BhEGXLpLtSQ5UHB8/p+or7y6CkgCC4vkv3+4yb4JrJ6Ovg0yD9i4Afg2sAgjD4ZvsHf58v4qA5XzOBD15dKY3buuRJS/Up2+jC7hkvDwHR2ExWFKg3FiGPNR4/ZGIQOz/x0C6Y2l+9htDv/vDv7xc/tz1oUNbT32pUtlQnzDaqSQUNFPMMMJjV6SCxImjesRgiqkplnGRw+sqadVvSjBk3pt+/ddj0SyATx6Z5viDgVheUrsHUjZPmwoS1EngFpVOxUopogCCrrIRrMGFLAdR5ZMUaYm8E1upFf++CXPdiWFHVIRg6cQwhRRLk9h/eMSQ5goglBAj0X0c2HI5acQaYk0DgOOxo0zCudtsnQezNcu5sfnR49g3G2V7khZPKuHQZy7yYvtZVWNaeQhG0Ylfav85FPo53ipgrwjdZCOx5Td2Z8n6jZlwtqL/MbHJ2vuAi19jFBSbGnacPKgu29iJan5wJZxz/rQFdcyE+fhEFPFhf2JbeuP2B28ztOc0bcRTT2vXOoJRCKlS/S7HO5qySrTOFy0Yj3+9ivFLivE48IdQMQl0WjXGjofYhl3OERRqYGLzIrrV59bg2pmwcU15awgZuJZxa+UqdU2Q52gI8aqd+Il7Z0GpUqw+gXDutZ27SPK19UKNatZFN8rpd0Z5A9/TUJGndtetU/lpStVPHyNaJ5ofamK0vaY45F8SxICtaloC6jNrzJEELzz9FkQpKy/VTlgGe/riMAFhGX9IMMDSeS8tACZY/rpIEAYIvy2ipgHW0vEt5M5+iqKSo6+jTvrIwF8RhxCKDC5XvuCeiDOFmfwi4VHvyM1VmikQxuB5bqUk/GzGJp4DNWRKkseny5Zo/qk6zrX9od8W3DZMkVS6IgyIDzHpVlUNKUuNlJB1PPiFi91mzQMNyNKo98loIKXPOYg0tZCwxcSxJOvGG1yrO1VCFkEmwAAQH+p5qF6AEPtpQSp2bNyBQlduB3E6LWLPlQfmcPmYRGmDrakYcaok31HO1OAgJNqp11M9WShEXHmpHa4cNPukjofEwdF6XdjlY2QcnkNRtdav2ZWe1N6Wxux76UlIEV9kbdso0OfnAiVPeLTLibjsOtMe7eIKPowP9pm8TvzPjc1dsYVx1fcOCf68LU0ydcbfwUetzWS4ftm6ooXs38bS3r3edXznQHO/cfHkcpFxN7GuAEWryrlKX59jqlC+DlPCUN8KDOtNkuC6UMt2vJIYOKUw0yz4z7hL2sRUHbFR8xiQP4nV16VDNw4Y0J4tQHcVF4th66iFRx8CMjCKeqqTesy9yvSyi1eOMOHXHq/2qifR9IRK2V/P9MTeM9P3GhP9sZ1EqTaY9Mv7Pd4yfyQAzovzhyEduNq8TF5G5OoZSwoRxR81JpOnZsWoeYeiV4Iq5o5zvRUbvwkS6Cw+B81Kuv+8lwkZFc4JStVLNrNSuVC/BpKZ5acBEdafyIVKophnJpjMillZ5AcMPmlTMif1KdQSmtUoTfoV8ZYARaU5DUfcRlBbpVqH1GISB8tsgaKfJTb0cXYQXShiEneTYHG52ebOLUrDsp95Kv8SJ4mBl5Zo4BvOFxV4KiOaZ6qeVrcpV/yY7r4ANyusjQNiTpN++PGTo6VLJyEjEEJdfn5LIH3HQHPADmDWY7VURqm14RY4UHLCZ8ANzTFCuy4+2pkC5iGo4OzZHofbKmNs63xzuzyFxVyAMwMKVKqXp6ZoFB9dS6hxj/RaoJTCRj8Mx3cuaqQPpGD/jPGC2tkPhV8gNcVxuiejAH74a82hkIrEVzZWYTudBt3YViFobvI/l7UnpB7u99nicPzCoKDSvhBttEXRNLB4S5Q/1aTCtTEKxRmP5AFNeiEPQjaMhgq8cHXk3Yg/ZmArBSm8XNrbL92JtKMdn9I2bM5d6HabPmGK7E4cp0XjqEGtwZ7BRjmaiNdanM5P4d2P+uXGft+szOF+DyrrHZT+PCyhCokDaKJf4pE4I1rlAFg7jtbvxsuEyMUx4yQihfkjFjKgblC3MLhctZveB14cx/9QZs4b42Iv+kjPiENXtVh9MKrZNcHzig1FoNtiaMPdtg0cU4hfUTbsWDGu2LSILUTuNbNvZgc9eQwxQsQNGod2ofQk10xalInHhiNXw6mByenaWVCvlYUOamjc/TdpKOJmsksIHAuerzSRQ2qvNTarejLvNaqOorFmWAYZPm8lSWU4mT6mgc8vPk4kCJpPNIl0TrJvJ9gGUtpNVnEbJx4Y01vtLcVYtyyuR+Ogbz25KCSM6Es3ANjuapd+XAL8tovSS1eQYWyDSvaMs4Ylmr+LRi465d/Lvf/VP7xfJUEWk9sz4iOqmVKRkNkuMkUlNvrmgsuMZ4LGfcoSRWxky5to1PRUhGDplfqXGTpO+DWkb9m2lVlLBT8q/f8fIFofWhDFSko8MQnTKj1FOzOwqB4zdKTNdnB+oMofvTbQPQgMKucdNLdlmizd4yS0QecnH1UphbwTKcilrswxG92HkZPeOYOw9qJ0tuJQPUSINvJaXalPmvN4F25364Mu3gWnxG5JS1pwQh2YffbdyuS/Gim+TMp86lbr/cc5XRgJjPWx+oi3vftWIV0/CzxwZd5OKpW3SnAB/9uz53rH7/92IM+xx8hg/OIZ2+WTliziITU7Lvhx6X0DZ5EcDz0R6E6N4psO81sFo7quCTXGgFfMMeWM/nuNJEje5Tzah2KPG4msR5bWwVpq+ywtx4rKf/WizbuIS8n0f+R+48cSjUirdegPRvCsqGpCog4g/MLsi9uInhjEvV2I/UE+cacL79HLeiOOnAHE8TKHT3pj8CCbG6ScuVec6v4MpOR9IMT2bLD9gyo/LCWp5mp1USlcWFc8RFB9KRMafwha/ZU5cVpLdwpkX4lI0/WrjolR1KpJ6syvVK7Ct+mdZ1kP3KrX1hXHq6OkGPrKdygtoaxVfumWp4VcfwaLiSXv6+STOuFsOI6Csl6/ZCmv9tB5eK8Fw+Zzl2W6H0VJVotflLpntSfPv62EJqK/Rp0wy40/RMFCuh+snK+fEYTu+KyPsZT3llZa8POTBzAhxeXmIqqhXjVTmEW8rYohlPysf1gdDwBPKm4OjXnkkDhIb81x3VfYQVNuwxqOK3HmjGjJ+ywdFE06HMRdV5VMNpMozwF0N5p442OwA5nN/k7Qrgs4XEIAfTwey7j0HzNY9mLu8DS8PsaTLWFksxyxg5Hxz41JeiGNLpyEGHWm0I3obPooaYCRCBOoO1E11ooqrHBJSzG2wcNfL+PoMIz7w5V8Pazvl0uKkIxFKYONeudRG4Vn8bRJxZPz7t66A/gWQSiAQ7hniFJbb9QwLM4nGu7rgyUusLzo+cj7fiUrqWZwBti7npu51z0VdSU9UT6PZpYNa4xuDj8v5C9/Jx/XOi42cS8G5+yJtf+GclOsjrC3LvMiDIpPXNNR5JZcxXjqiSgTWmeI3+P4Naoz2cRmLESgx+bUkune9TynpiAx4dECZEh6JbCfi9wij+MIRZ30rEZeHDDDzH/uMgpVmilJAIu6ORqapTZS5be7POessNjWYLRzWTL68Yn5Hic5Isb0pmPqmuc/1MgfUbbs6vK61TGN/5yaTyZbZsMGEvyFHxGHjctsdgVJ3u03OtBE433YvS+Cxu72xEnqN6bY7UYJudyvVAD9tu69g2N120+uo9fK221XAtrtN7/BClnhDdLnd7nPMuSCOuuUSEAnablIcQ6DVFZV/IBpnFZl4KExgk07z2JiK7XsQfE4qvTBubuJEcTu9bw4a5Si2JVep5YI4wqapEbgApZmNaEIctcshI+mjk8lZjLQn1vuLqZea2FB114zNoVFPEgBscdamF4ykp5oUe/E38LLrRPjlgjgGe8UvCjmogCbVa+6DZpYRQdDocec6/FcInDZTzIcZYAPyW0zuLSQHvDwDHDnJwpoX4ipRsHsFt7LS0sdg2FEjh6RLIcbOCLCp6kquGEFVtTQtBQdK2LwCmy0Y2VJJHXKi4G4IxihfxKFZm9ra5iAQsFZbzRx8kY5AY2g+vHja1UZuZkxHju20FzLn9mPH8V4+NeRIY/CFNGqrp7zdAnHOFAay8cEYPDf5TasHwRI2mEo2D07Yozm/mdueHzzKxaCB4EGIxv8tB3Oe2PJCHMwuF/kKP2f73zVA3/4o1Wq+b+K0t0PtrcOmX4KT0hvirQP1X4KTN8zMvGsUxB2JgrgjURB3JArijkRB3JEoiDsSBXFH4uRtzxm/X5yoBY5CMVSPxMk/FjgKJ29d9v5e8dZZrQIFChQoUKBAgQJH4p8LHIWTfylwFE7+tcBROPltgaNQpJWOREHckSiIOxIFcUeiIO5IFMQdiYK4I1EQdySKDekjUWxIH4liqB6Jk98VOArFhvSReOs8aoECBQoUKFCgQIEj8dYbu+8VxYb0kTj5twJHociOHImCuCNREHckCuKOREHckSiIOxIFcUeiIO5IFMQdiYK4I1EQdyQK4o7Eya8LHIWTt/63mN8r3jqPWqBAgQIFChQoUKBAgQI5xv8AHS+klv++b2IAAAAASUVORK5CYII="
                alt=""
              />
              <select name="" id="">
                <FaCaretDown />
                <option value="EN">EN</option>
              </select>
            </div>
            <div className={classes.form}>
              <a href="/">
                <p>Hello, sign in</p>
                <span>
                  <h5>Account & Lists</h5>
                  <FaCaretDown />
                </span>
              </a>
            </div>
            <div className={classes.orders}>
              <a href="">
                <p>returns</p>
                <h5>& Orders</h5>
              </a>
            </div>
            <div className={classes.carts}>
              <div className={classes.carts_cart}>
                <IoCartOutline size={50}/>
                <span>0</span>
              </div>
              <span>cart</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
