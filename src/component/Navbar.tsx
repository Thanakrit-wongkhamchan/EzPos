import React from 'react';
import {  Layout, Menu, theme } from 'antd';
import { Color } from 'antd/es/color-picker';
import './Navbar.css'

const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `gfaaf ${index + 1}`,
}));

const Navbar = () => {
  const {
    token: {  borderRadiusLG },
  } = theme.useToken();

  return (
    <>
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{
          flex: 1,
          minWidth: 10,
        }}>
          <div
          style={{
            
          }}>
            fasfsaf
          </div>
        </Menu>
          
      </Header>
      <Content
        style={{
          minHeight: '85.5vh'
        }}
      >
        <div 
          className='Block-content'
          style={{
            
            padding: 24,
            backgroundColor: "#fff",
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur quas a repellat placeat corporis autem, molestias quidem pariatur, obcaecati sunt voluptates praesentium. Nam placeat voluptatem, sed fuga harum delectus rerum officiis illum quis omnis illo aut! Harum similique temporibus facilis repellendus nobis, corrupti veritatis maxime eos voluptas odit possimus eveniet? Distinctio accusantium provident deserunt, a, corrupti, totam praesentium cum facilis atque tenetur eius. Earum porro, quibusdam rem, modi officia nam dicta rerum nisi iusto veritatis veniam sapiente placeat quo eligendi repudiandae voluptatem. Ut voluptatibus inventore facere quis eius similique eveniet voluptate labore neque unde beatae iste quam, dignissimos veniam quos quae tempore consequatur reprehenderit voluptas? Libero consequuntur eius quidem ipsam iusto itaque expedita, labore at quia officia molestiae consectetur ut ab reiciendis tempore! Officia iusto laboriosam nam, distinctio quas quam sint, porro facilis commodi id ut inventore at laborum rerum, vitae fugiat vero! Quae consequatur nisi dolorem aspernatur nesciunt mollitia sit. Perspiciatis, nulla dolor sit veniam rerum recusandae non tempora repudiandae provident suscipit laboriosam cupiditate. Neque, consequatur ea id laboriosam distinctio consequuntur vel modi cum impedit eos! Quae libero iure maxime, eius sapiente quibusdam eum ex rem reprehenderit non veniam unde praesentium autem recusandae magnam voluptate sequi id. Mollitia eum aliquam pariatur laborum sed, rerum et ipsam magnam perferendis voluptatum, maiores similique omnis quo magni distinctio provident nobis cumque quae enim repellat? Libero, quibusdam sequi quod omnis dolore facilis, debitis quam perspiciatis eveniet optio nulla! Nemo facere iusto saepe tenetur laudantium exercitationem maxime delectus est, fugiat amet nam corrupti numquam molestiae ab cum! Tempore, recusandae! Architecto nam, esse accusantium neque enim aspernatur assumenda, soluta maiores provident fugiat sint odio! Eius repudiandae, possimus ad officiis dignissimos nihil eaque placeat sunt, suscipit quae itaque beatae ullam voluptatibus. Magnam, rerum distinctio corrupti illum modi temporibus dignissimos. Porro quibusdam corrupti cumque animi quisquam repudiandae distinctio quasi aliquid sed accusamus omnis facere, consectetur ea. Veniam quibusdam exercitationem et eveniet natus facilis eum praesentium, animi aspernatur eaque ex laboriosam possimus neque atque blanditiis accusamus nihil. Ut repellat natus voluptates dolore facilis ratione non sapiente aut, cumque saepe delectus praesentium harum porro amet veniam sunt ullam cum sequi quidem molestiae perferendis qui vitae. Pariatur, sint quo sapiente voluptate repellendus unde totam beatae, aspernatur harum dicta cumque? Perferendis, natus repellat nulla aperiam incidunt deserunt optio harum consectetur culpa, officiis alias tempore? Quia dignissimos earum voluptates, sapiente provident alias quasi ab eos esse ipsam, quidem ratione maiores natus quam temporibus voluptatibus quos modi magni accusantium nihil impedit eveniet magnam reprehenderit saepe! Dolor at adipisci corporis accusamus laudantium provident recusandae, magnam blanditiis deserunt, enim non sed accusantium. Consequuntur nulla voluptatibus mollitia illum aut impedit aliquam, earum, iusto nesciunt laudantium dolorem quam similique repellat quae cum odio quidem animi praesentium consectetur? Neque laborum unde itaque, non nisi numquam doloremque quis, fugit quos doloribus ad ducimus dolore sunt culpa illum, dolor commodi reiciendis ipsa possimus magni. Dolores atque magni dolorum corporis voluptas nisi illo, porro nemo? Eius doloribus eos sequi sed corporis quaerat obcaecati, vitae eaque reprehenderit ipsa! Sequi temporibus molestiae, quidem, dolorum facilis excepturi eum sunt quod dolore debitis eligendi impedit quam, optio ipsa? Voluptates harum animi magni quidem! Magni, officia expedita veritatis iste odio voluptate nemo tenetur quos exercitationem illum commodi? Autem nihil placeat nostrum praesentium dolores itaque illo ea nobis natus nam quo fuga architecto accusamus quasi cupiditate, esse aspernatur molestias hic aliquid amet, fugiat illum eligendi? Laudantium atque nobis sequi, quaerat nostrum dolores iste rerum excepturi est sed? Consequatur aut veritatis nostrum aperiam facere sed provident placeat explicabo, iusto ut aspernatur ab. Dolorum tempore odio at explicabo, mollitia laboriosam praesentium unde ex expedita, sunt iure quaerat dolores veniam iusto aperiam illum quibusdam impedit repellat. Ipsa similique illo suscipit quaerat sequi ab quo officia odio natus, assumenda omnis, molestias placeat vero distinctio totam beatae magnam nam, inventore porro! Ipsam perspiciatis cupiditate sint hic molestias tenetur iure quis. Repellat numquam enim ipsam, beatae quaerat, consectetur facere eum aliquam dolores placeat mollitia suscipit, ducimus blanditiis. Cumque mollitia expedita corporis ipsam tenetur quae doloribus accusantium libero quis? Laboriosam tempore odit facilis nobis vel blanditiis delectus culpa laudantium eveniet rerum necessitatibus harum, veniam iusto quae voluptatibus earum alias commodi mollitia! Tenetur placeat nesciunt nulla omnis perspiciatis, obcaecati, excepturi quis necessitatibus maxime laborum quo. Natus eaque sunt, iure quae illo ea id. Possimus eos at vel. Doloremque aut, incidunt voluptatem molestias laborum, dignissimos ea voluptate excepturi repudiandae blanditiis tempore cumque suscipit maxime ipsum provident aliquam praesentium enim minima soluta. Ab fugiat delectus quos dolorem magni, blanditiis laborum impedit facilis, accusantium reprehenderit deleniti qui at possimus iste sed labore libero harum necessitatibus sit eum incidunt alias voluptate aliquam culpa! Illo nam praesentium hic aliquid inventore minus quisquam reiciendis quas officiis, optio dolorem cum maxime rem consequatur blanditiis alias sed perspiciatis officia? Sapiente quas nihil at, earum beatae, neque odio et nostrum eius atque provident non ipsa esse in iste similique eveniet! Ex, aperiam magnam. Pariatur fuga obcaecati quam earum eligendi? Beatae, officiis. Impedit recusandae voluptatum quam est suscipit inventore soluta at illum enim accusamus eaque nulla excepturi ab ipsam laborum qui, explicabo optio voluptas culpa veritatis! Laudantium ipsa amet corrupti neque placeat non nesciunt debitis quo nulla doloremque dolor quaerat sed corporis consequatur nostrum dolorem, iure accusamus commodi impedit! Odit tempora perspiciatis hic officia tempore, consequatur quas! Delectus culpa eligendi tenetur. Distinctio dolorum quibusdam provident molestiae esse. Quas quasi quisquam dignissimos unde soluta dolores officia perspiciatis molestias error possimus, nemo eaque quam corrupti fugiat accusantium quo. Tempora voluptatem deserunt excepturi fuga possimus doloremque nesciunt qui quo. Vero distinctio ipsam est expedita sit, deleniti quam adipisci repudiandae sapiente minima sunt iste dolorum nisi quas provident non molestiae porro minus voluptatibus debitis eaque. Quas libero est esse vero nesciunt ipsam dolor aperiam nobis quos debitis, animi atque in enim consequuntur consectetur? Enim suscipit corrupti quisquam earum molestias omnis quas voluptate, optio minus cupiditate! Optio, sequi! Magni minima sed ad, atque hic doloribus sunt voluptate inventore molestias laudantium aperiam illo. Nostrum nulla recusandae impedit eius corporis, earum reiciendis odio obcaecati alias totam nihil deleniti, mollitia repellendus dolores. */}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur officiis nihil qui tenetur perferendis eum, laboriosam porro natus repellendus repellat dolor similique doloremque in illo explicabo adipisci, odio non. */}
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ea voluptas vero natus corrupti. Error quasi eos cupiditate provident nemo harum id dolorum quidem non praesentium dolor obcaecati sed, possimus corporis ipsa quo, delectus deleniti magnam nam! Optio reprehenderit odit ea aliquam velit eligendi, vel eveniet, corrupti nesciunt suscipit harum nisi nostrum dolorum delectus nobis obcaecati sint blanditiis quisquam, quos earum cum est! Neque nisi similique odio, fuga corrupti natus velit vel harum dolorum, accusamus assumenda. Cumque, numquam placeat, totam voluptates natus dignissimos nesciunt inventore temporibus harum quae aliquid eveniet minima quibusdam. Sed possimus harum voluptatem ipsa dolorem nemo neque repudiandae quaerat eum ea, voluptas ratione. Excepturi quo earum debitis voluptatum? Nostrum harum reprehenderit excepturi modi atque consequuntur architecto labore autem eum ipsum, est veritatis, accusamus aspernatur esse, consectetur provident iure ut aperiam blanditiis eos odio neque reiciendis vitae. Tempore obcaecati necessitatibus fuga dolor, autem exercitationem quod velit commodi at rerum aspernatur fugiat id animi voluptatem ducimus quisquam, aliquid sequi harum, distinctio quo tempora accusantium neque beatae omnis. Necessitatibus exercitationem vel similique reiciendis facere non, odit vitae nulla tempore. Dolorem eius rem, beatae expedita dignissimos eligendi id, dolores aliquam, autem praesentium quis dolor eum aut soluta laborum cumque commodi. Nulla, tempore hic eveniet, aspernatur obcaecati porro perspiciatis fugit veritatis deserunt soluta sapiente nisi a ipsam nobis laborum voluptatibus distinctio id ipsa! Hic asperiores reiciendis odit esse amet, quos corporis, quis recusandae similique quod quasi, magnam repellat sunt optio est perferendis cum minus molestiae. Soluta officiis pariatur illum accusamus rerum earum aut ab laboriosam? Nihil quibusdam voluptatibus eum molestias inventore quia aliquam, quis illum, sapiente voluptates distinctio ut expedita. Perspiciatis animi velit exercitationem harum quidem laudantium consequatur voluptatem vero alias beatae? Est eaque itaque necessitatibus quasi eos quam suscipit nulla, nihil ullam magni doloribus soluta cumque corporis aut dolorem sed voluptas recusandae, modi totam perspiciatis pariatur dolore a aperiam reiciendis. Qui est officia expedita esse ducimus magni consequuntur sed nulla nesciunt, cum necessitatibus neque minus aliquid quis temporibus maiores doloremque obcaecati ab alias debitis voluptatum sequi dolore aut fugiat! Soluta, quae reprehenderit? Provident beatae impedit reprehenderit, inventore placeat ipsam dignissimos laboriosam quasi, voluptate veritatis, odio quisquam tenetur ex alias quam! Aspernatur sequi nulla ratione id reprehenderit, earum accusantium? Repudiandae voluptate porro deleniti esse? Officiis reiciendis quis tempore doloribus labore explicabo natus impedit, eum corporis dolore molestiae est expedita similique nam magnam voluptatum veritatis sequi, harum in officia quas sunt ex libero molestias. Quod officia voluptate fugit quo dolorem esse reiciendis eum unde? Omnis nobis repudiandae facilis numquam voluptatibus eligendi exercitationem nihil accusamus assumenda ex! Minima dolorem earum ex blanditiis soluta odio quae sapiente magni atque a aliquid quasi adipisci odit eligendi quis dolor, dolorum autem repellendus, rerum dicta distinctio? Labore deserunt rem, nisi, iure maxime neque quo, dignissimos minus similique vel inventore doloremque dolor? Doloremque impedit quia, ex maiores debitis iste fugit illum laboriosam laborum. Eligendi, necessitatibus porro? Odio aliquid soluta nesciunt numquam, sequi vel inventore suscipit ab quaerat quia, minus molestiae? Totam sapiente facere quod cupiditate? Totam optio voluptates mollitia eos, ab dignissimos illo soluta, minima eum laudantium veniam ratione unde nisi ullam nihil, assumenda necessitatibus ipsa! Commodi nam atque quae qui voluptatibus cumque non error? Consectetur, atque nulla? Architecto eaque culpa voluptates? Incidunt eum, similique expedita asperiores dolores amet consequatur quae eligendi fugiat delectus distinctio reiciendis dolorem labore error quia mollitia quisquam repellat, voluptatem ea qui ipsa nesciunt doloremque. Impedit placeat distinctio at tempore blanditiis, asperiores hic facere veniam tempora iste, et minima laborum accusamus in quam, aperiam sint error cum. Eum consequuntur repellat aspernatur dolor porro tenetur minus adipisci quaerat! Temporibus, alias. Dolores sequi est unde architecto sunt facere repellendus libero quia tenetur eaque voluptates et esse voluptatum aliquam, dicta dignissimos, voluptas nisi totam quidem sapiente? Vel sed quo saepe, tempora labore quisquam libero cumque quod odit aspernatur magni odio quis, tenetur aperiam laborum! Dolorem molestiae nulla dolores optio, assumenda reprehenderit quis quos hic architecto dignissimos tenetur. Dicta, ea aliquam. Dolores nesciunt quam praesentium nobis, sequi dicta repellendus illo inventore neque, deleniti eos, explicabo libero sint cumque beatae. Consequatur sequi laboriosam dolore saepe pariatur, et culpa doloribus vitae accusamus magni provident porro nisi ex! Fugiat iusto architecto itaque quidem minima mollitia nesciunt, animi reiciendis reprehenderit! Perferendis facere a eligendi voluptas voluptatibus animi, sint molestias recusandae adipisci. Sed voluptas dolores inventore, nobis, autem ratione accusamus animi impedit aut unde laborum nam fugiat voluptatum, iste perferendis ut tenetur. Asperiores reprehenderit voluptatibus sed eos ea porro aspernatur maxime, provident, ipsum, expedita magni repudiandae? Fugiat quae beatae quasi aut voluptatum quam tempore consequatur iste recusandae. Commodi dicta minima quo sint corrupti, ratione porro, cupiditate, molestias accusamus aspernatur quia reprehenderit eum quasi dolorum qui ipsa delectus? Consequatur, voluptatum, commodi distinctio libero facilis minus temporibus, exercitationem non placeat dolor molestiae? Accusamus velit sapiente, ab dolores dignissimos facilis voluptate nostrum doloribus, atque similique nulla consequatur et excepturi. Maiores consequuntur totam illum, error odit soluta laborum possimus doloremque dolorum, debitis quaerat sint eius quidem cumque delectus beatae deserunt est necessitatibus illo quasi, porro aspernatur nisi ipsa? Obcaecati, ipsum repellat explicabo, iure labore, non vitae voluptatum expedita dolorum molestias ullam culpa eum aperiam provident debitis perferendis laborum minima doloremque eos! Non earum mollitia harum fuga maxime. Harum rem laudantium incidunt ex provident ullam quo voluptatibus ut! Ut quis repudiandae atque sunt aspernatur ea totam, distinctio commodi, quo sequi molestiae fugit, ad obcaecati? Aut dolorem doloremque delectus eligendi placeat temporibus consequuntur in amet fugiat, ipsum quas, assumenda eveniet veritatis suscipit? Corrupti delectus qui praesentium laudantium quasi omnis autem doloremque facilis quae repellendus saepe earum deleniti magni labore quia ratione cum adipisci, odit quis animi! Dicta soluta eligendi unde obcaecati natus odit neque voluptatibus. Animi consequuntur corporis, velit eligendi nobis repellat inventore ratione qui sed cupiditate id ab, accusamus praesentium pariatur nulla vero numquam repellendus blanditiis, dolorum cumque repudiandae ducimus. Adipisci dicta, saepe nobis tempore similique expedita molestiae dolorum cupiditate obcaecati rem, cum consequuntur, praesentium non! Distinctio error minus autem fugit blanditiis nisi recusandae nihil facere hic quam aliquam accusamus, corporis, dolores minima eum voluptas, sapiente odit assumenda aliquid! */}
        </div>
      </Content>
      <Footer
        // style={{
        //   minHeight:'10vh'
        // }}
        > 
          EzPos ©{new Date().getFullYear()} Created by Soya && Kawaii
        </Footer>
    </Layout>
    </>
    
  );
};
export default Navbar;