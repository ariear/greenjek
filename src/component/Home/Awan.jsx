import Parallax from 'parallax-js'
import { useEffect } from 'react';

function Awan() {
    useEffect(() => {
        const awan = document.getElementById('awan')
        new Parallax(awan)
      });
    return (
        <div id="awan" className="absolute left-0 top-0 w-screen h-screen overflow-hidden hidden lg:block">
        <img src="/img/paral1.png" data-depth="0.2" className="w-full absolute top-0 left-0" alt="paral2" />
        <img src="/img/paral2.png" data-depth="-0.6" className="w-full absolute top-0 left-0" alt="paral3" />
        <img src="/img/paral3.png" data-depth="0.5" className="w-full absolute top-0 left-0" alt="paral4" />
        <img src="/img/paral4.png" data-depth="-0.3" className="w-full absolute top-0 left-0" alt="paral5" />
        <img src="/img/paral5.png" data-depth="0.9" className="w-full absolute top-0 left-0" alt="paral6" />
        <img src="/img/paral7.png" data-depth="-0.8" className="w-full absolute top-0 left-0" alt="paral7" />
        </div>
    )
}
export default Awan;