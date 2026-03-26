"use client";
import React, { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgwpjyo", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-[1000] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-green-600 rounded-full"></div>
            <span className="text-2xl font-black text-blue-950 tracking-tighter uppercase">INDERIS <span className="text-green-600">IDS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Inicio', 'Nosotros', 'Servicios'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-950 transition-colors">{item}</a>
            ))}
            <a href="#contacto" className="bg-blue-950 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-xl">Presupuesto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/inicio.jpg" alt="Ingeniería Vial" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-6">
              INGENIERÍA <br /> QUE <span className="text-green-500">CONECTA.</span>
            </h1>
            <p className="text-xl text-slate-200 font-light italic max-w-xl">"Obras y Sewrvicios con Proposito"</p>
        </div>
      </section>

      {/* BARRA DE ESTADÍSTICAS */}
      <section className="bg-blue-950 py-16 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "15+", t: "Años de Experiencia" },
            { n: "120+", t: "Obras viales y de accesibilidad Ejecutadas" },
            { n: "100%", t: "Normas Nacionales" },
            { n: "ADN", t: "Nuestra misión es garantizar autonomía y accesibilidad universal con impacto social real." }
          ].map((stat, i) => (
            <div key={i} className="space-y-2 border-r border-white/10 last:border-0">
              <div className="text-4xl md:text-5xl font-black text-green-500 italic leading-none">{stat.n}</div>
              <div className="text-[10px] font-black text-white uppercase tracking-widest">{stat.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS + RECONOCIMIENTO INSTITUCIONAL */}
      <section id="nosotros" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="/img/fondo.jpg" alt="Equipo IDS" className="rounded-[32px] shadow-2xl object-cover h-[550px] w-full grayscale hover:grayscale-0 transition-all duration-700" />
            
            {/* EL NUEVO SELLO DE INTERÉS INSTITUCIONAL */}
            <div className="absolute -bottom-10 -right-6 md:right-10 max-w-xs bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-green-500">
                <p className="text-[9px] font-black text-blue-950 uppercase tracking-widest mb-2">Reconocimiento Oficial</p>
                <p className="text-[11px] text-slate-600 leading-tight italic">
                  Declarado de <strong>Interés Institucional</strong> por la Defensoría de las Personas con Discapacidad de Mendoza.
                </p>
                <p className="text-[10px] font-bold text-green-600 mt-2">Expte. N° 0-074-D-2026</p>
            </div>
          </div>

          <div className="space-y-8 text-left">
            <h2 className="text-5xl font-black text-blue-950 tracking-tighter uppercase italic leading-none">Sobre <span className="text-green-600">Nosotros</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              Bajo el liderazgo de un equipo mendocino con trayectoria en obras civiles,industriales y proyectos de desarrollo social integral, nace <strong>INDERIS IDS</strong> para transformar la infraestructura urbana en espacios que garantizan la <span className="text-green-600 font-bold uppercase italic underline decoration-2 underline-offset-4">accesibilidad universal</span>.
            </p>
            
            {/* Bloque destacado del texto institucional */}
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-950 italic">
               <p className="text-slate-700 font-medium leading-relaxed">
                 "Nuestro proyecto IDS – Inclusión y Desarrollo Sostenible ha sido distinguido por su contribución real a la inclusión social en la provincia, respaldado por organismos gubernamentales."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIONES (Información Completa) */}
      <section id="servicios" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-green-600 font-bold uppercase tracking-[0.3em] text-xs">Expertise Técnica</span>
            <h2 className="text-5xl font-black text-blue-950 uppercase tracking-tighter italic mt-2">Soluciones Especializadas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Demarcación Vial", d: "Señalización horizontal y vertical de alta durabilidad bajo normas de seguridad vial.", i: "🛣️" },
              { t: "Bacheo y Calzadas", d: "Reparación técnica de veredas,pavimentos asfálticos y hormigón en consorcios,centros logísticos y espacios publicos.", i: "🏗️" },
              { t: "Hogares Seguros", d: "Adaptaciones arquitectónicas diseñadas para maximizar la autonomía personal.", i: "🏠" },
              { t: "Accesibilidad Urbana", d: "Rampas y sendas podotáctiles. Eliminación de barreras bajo normativa internacional.", i: "♿" },
              { t: "Consultoría Técnica", d: "Relevamientos y diagnósticos de accesibilidad para proyectos comerciales y públicos.", i: "📋" },
              { t: "Gestión de Proyectos", d: "Dirección técnica con 15 años de trayectoria asegurando calidad y plazos de ejecucion de obras.", i: "👷" }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] border border-slate-200/50 shadow-sm hover:shadow-xl transition-all text-left">
                <div className="text-4xl mb-6">{s.i}</div>
                <h3 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tighter">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed italic">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="bg-blue-950 rounded-[48px] shadow-2xl overflow-hidden grid md:grid-cols-5">
      
      {/* Información IDS Mendoza */}
      <div className="md:col-span-2 p-12 text-white flex flex-col justify-between text-left relative overflow-hidden">
          <div className="relative z-10 space-y-10">
              <div className="space-y-2">
                  <h3 className="text-5xl font-black text-green-500 uppercase italic tracking-tighter leading-none">IDS – <br /> Mendoza</h3>
                  <p className="text-slate-300 font-light italic text-lg">"Transformamos espacios, creamos valor"</p>
              </div>
              <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                      <span className="text-xl">📍</span>
                      <p className="text-sm font-medium"><strong>Ubicación:</strong> <br /> <span className="opacity-80">Mendoza – Argentina</span></p>
                  </div>
                  <div className="flex items-start gap-4">
                      <span className="text-xl">📧</span>
                      <p className="text-sm font-medium"><strong>Consultas:</strong> <br /> <span className="opacity-80">contacto.idsservicios@gmail.com</span></p>
                  </div>
              </div>
          </div>
          <div className="relative z-10 pt-12">
              <a href="https://api.whatsapp.com/send?phone=5492615539963" className="block w-full bg-green-600 py-5 rounded-2xl text-center font-black uppercase text-xs tracking-[0.2em] hover:bg-green-500 transition-all">WhatsApp Directo</a>
          </div>
      </div>

      {/* Formulario */}
      <div className="md:col-span-3 bg-slate-50 p-12 text-left">
        <h4 className="text-3xl font-black text-blue-950 uppercase tracking-tighter mb-8 italic">Solicitá Presupuesto</h4>
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input type="text" name="Nombre" required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:border-green-500 outline-none" placeholder="Nombre o Institución" />
            <input type="email" name="Email" required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:border-green-500 outline-none" placeholder="Email" />
          </div>
          <input type="tel" name="Telefono" required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:border-green-500 outline-none" placeholder="Teléfono" />
          <textarea name="Mensaje" required rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:border-green-500 outline-none resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
          
          <button type="submit" disabled={loading} className="w-full bg-blue-950 text-white font-black py-5 rounded-2xl uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
            {loading ? "Enviando..." : "Enviar Mensaje →"}
          </button>

          {/* ESTO ARREGLA EL PUNTO 2: AVISO DE MENSAJE ENVIADO */}
          {status === "success" && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl font-bold text-center border border-green-200 shadow-sm animate-pulse">
              ✅ ¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</section>
      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">© 2026 INDERIS IDS • Mendoza • Argentina</p>
      </footer>
    </div>
  );
}
