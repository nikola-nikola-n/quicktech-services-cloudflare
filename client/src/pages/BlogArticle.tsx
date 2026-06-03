import { ArrowLeft, Home, Mail, Phone, AlertCircle, CheckCircle } from "lucide-react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const LaptopRepairContent = () => (
  <div className="space-y-6">
    <p className="text-lg text-gray-700 leading-relaxed">Is your laptop running slow, overheating, or starting to act up?</p>
    <p className="text-gray-700 leading-relaxed">These problems usually don't fix themselves — and ignoring them can lead to bigger issues like data loss or complete failure.</p>
    <p className="text-gray-700 leading-relaxed">In this guide, I'll show you the most common signs your laptop needs repair, what they mean, and when it's time to get it checked properly.</p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Common Signs Your Laptop Needs Repair</h3>
    </div>

    <div className="space-y-6">
      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-orange-600">1</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Overheating or Loud Fan Noise</h4>
            <p className="text-gray-700 mb-3">If your laptop is getting hot or the fan is constantly loud, it's usually caused by dust buildup or cooling issues.</p>
            <p className="text-gray-700 font-semibold mb-3">This can lead to:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Slow performance</li>
              <li>• Random shutdowns</li>
              <li>• Long-term hardware damage</li>
            </ul>
            <p className="text-sm bg-green-50 border border-green-200 rounded p-3 text-gray-800"><strong>✓ A proper clean and thermal check can fix this.</strong></p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-yellow-600">2</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Battery Not Holding Charge</h4>
            <p className="text-gray-700 mb-3">If your battery drains quickly or won't charge properly:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• It may need replacing</li>
              <li>• Or there could be a charging issue</li>
            </ul>
            <p className="text-sm bg-green-50 border border-green-200 rounded p-3 text-gray-800"><strong>✓ This is a very common fix and usually quick to resolve.</strong></p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-red-600">3</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Slow Performance or Freezing</h4>
            <p className="text-gray-700 mb-3">If your laptop is lagging, freezing, or taking too long to load:</p>
            <p className="text-gray-700 font-semibold mb-3">Common causes:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Old hard drive (HDD)</li>
              <li>• Low RAM</li>
              <li>• Background programs</li>
              <li>• Malware</li>
            </ul>
            <div className="space-y-2">
              <a href="/blog/how-to-fix-a-slow-computer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">See How to Fix a Slow Computer</a>
              <a href="/computer-upgrades-brisbane" className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-semibold ml-2">Computer Upgrades Brisbane</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-purple-600">4</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Screen Problems</h4>
            <p className="text-gray-700 mb-3">If you notice:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Flickering</li>
              <li>• Lines</li>
              <li>• Black spots</li>
              <li>• Cracked screen</li>
            </ul>
            <p className="text-sm bg-purple-50 border border-purple-200 rounded p-3 text-gray-800 mb-3"><strong>The screen may need repair or replacement.</strong></p>
            <p className="text-xs text-gray-600 italic">⚠️ Note: screen repairs can take time depending on parts availability.</p>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-indigo-600">5</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Keyboard or Trackpad Issues</h4>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Keys not working</li>
              <li>• Double typing</li>
              <li>• Trackpad not responding</li>
            </ul>
            <p className="text-sm bg-indigo-50 border border-indigo-200 rounded p-3 text-gray-800"><strong>✓ Usually caused by wear, liquid damage, or internal faults.</strong></p>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0"><AlertCircle className="w-6 h-6 text-red-600" /></div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Strange Noises (Clicking or Grinding)</h4>
            <p className="text-gray-700 mb-3">If you hear clicking sounds:</p>
            <p className="text-sm bg-red-50 border border-red-200 rounded p-3 text-gray-800 mb-3"><strong>✓ This often means a failing hard drive</strong></p>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-3">
              <p className="font-semibold text-red-900 mb-2">⚠️ Important:</p>
              <p className="text-gray-800">Stop using the laptop immediately to avoid data loss.</p>
            </div>
            <a href="/data-recovery-brisbane" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-semibold">Learn more about Data Recovery Brisbane</a>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-gray-600">7</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Laptop Won't Turn On</h4>
            <p className="text-gray-700 mb-3">If your laptop won't power on:</p>
            <p className="text-gray-700 font-semibold mb-3">Possible causes:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Faulty charger</li>
              <li>• Battery issue</li>
              <li>• Motherboard problem</li>
            </ul>
            <p className="text-sm bg-gray-50 border border-gray-200 rounded p-3 text-gray-800"><strong>✓ This needs proper diagnosis to confirm.</strong></p>
          </div>
        </div>
      </div>
    </div>

    {/* What You Can Try First */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">What You Can Try First</h3>
      <p className="text-gray-700 mb-4">Before getting it repaired, you can try:</p>
      <ul className="text-gray-700 space-y-2 ml-4">
        <li>• Restart the laptop</li>
        <li>• Check charger and cables</li>
        <li>• Run antivirus scan</li>
        <li>• Remove unused programs</li>
      </ul>
      <p className="text-sm text-gray-700 mt-4 italic">✓ If the problem continues, it's best to get it checked.</p>
    </div>

    {/* When to Get Professional Help */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">When to Get Professional Help</h3>
      <p className="text-gray-700 mb-4">If your laptop:</p>
      <ul className="text-gray-700 space-y-2 ml-4 mb-4">
        <li>• Keeps overheating</li>
        <li>• Is very slow</li>
        <li>• Won't turn on</li>
        <li>• Shows hardware issues</li>
      </ul>
      <p className="text-gray-700 font-semibold mb-3">It's time to get it looked at properly</p>
      <p className="text-gray-700 font-semibold mb-3">We can:</p>
      <ul className="text-gray-700 space-y-2 ml-4 mb-4">
        <li>• Diagnose the issue</li>
        <li>• Explain what's wrong</li>
        <li>• Fix it properly (not temporary fixes)</li>
      </ul>
      <div className="space-y-2">
        <a href="/laptop-repairs-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">See full Laptop Repairs Brisbane</a>
        <a href="/computer-repair-brisbane" className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-semibold ml-2">Computer Repair Brisbane</a>
      </div>
    </div>

    {/* Repair or Replace */}
    <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-amber-900 mb-4">Repair vs Replace (Honest Advice)</h3>
      <p className="text-gray-700 mb-4"><strong>In many cases:</strong></p>
      <p className="text-sm bg-green-50 border border-green-200 rounded p-3 text-gray-800 mb-4"><strong>✓ Repairing or upgrading is cheaper than buying new</strong></p>
      <p className="text-gray-700 mb-4"><strong>But if it's not worth fixing:</strong></p>
      <p className="text-sm bg-amber-50 border border-amber-200 rounded p-3 text-gray-800"><strong>✓ I'll tell you straight</strong></p>
    </div>


  </div>
);

const UpgradeHardwareContent = () => (
  <div className="space-y-6">
    <p className="text-lg text-gray-700 leading-relaxed">Is your computer getting slow, freezing, or struggling to keep up?</p>
    <p className="text-gray-700 leading-relaxed">A lot of people think they need a new computer — but in many cases, a simple upgrade can make a huge difference.</p>

    {/* Signs Section */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Signs Your Computer Needs an Upgrade</h3>
      <p className="text-gray-700 mb-4">You might not need a full replacement — just the right upgrade.</p>
      <p className="text-gray-700 mb-4 font-semibold">Common signs include:</p>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>• Slow startup and shutdown</li>
        <li>• Programs taking too long to load</li>
        <li>• Freezing or lag during use</li>
        <li>• Can't run newer software</li>
        <li>• Running out of storage space</li>
        <li>• Struggling with multiple tabs or apps</li>
      </ul>
      <p className="text-sm bg-blue-100 border border-blue-300 rounded p-3 text-gray-800 mt-4"><strong>👉 If your computer is slow, see <a href="/slow-computer-repair-brisbane" className="text-blue-700 hover:underline font-semibold">Slow Computer Repair Brisbane</a></strong></p>
    </div>

    {/* Best Upgrades */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">The Best Hardware Upgrades (What Actually Makes a Difference)</h3>
    </div>

    <div className="space-y-6">
      {/* Upgrade 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-green-600">✔</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">SSD Upgrade (BIGGEST IMPROVEMENT)</h4>
            <p className="text-gray-700 mb-3">If your computer still uses a hard drive (HDD), this is the best upgrade you can do.</p>
            <p className="text-gray-700 mb-3 font-semibold">You'll notice:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Faster startup</li>
              <li>• Programs opening instantly</li>
              <li>• Smoother overall performance</li>
            </ul>
            <p className="text-sm bg-green-50 border border-green-200 rounded p-3 text-gray-800"><strong>👉 This alone can make an old computer feel new again</strong></p>
          </div>
        </div>
      </div>

      {/* Upgrade 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-blue-600">✔</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">RAM Upgrade</h4>
            <p className="text-gray-700 mb-3">More RAM helps your computer handle:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Multiple tabs</li>
              <li>• Programs running together</li>
              <li>• General multitasking</li>
            </ul>
            <p className="text-gray-700 mb-3">If your system freezes when doing simple tasks — RAM is likely the issue.</p>
          </div>
        </div>
      </div>

      {/* Upgrade 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-purple-600">✔</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Graphics Card (GPU) Upgrade</h4>
            <p className="text-gray-700 mb-3">This is mainly for:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Gaming</li>
              <li>• Video editing</li>
              <li>• Design work</li>
            </ul>
            <p className="text-sm bg-purple-50 border border-purple-200 rounded p-3 text-gray-800"><strong>👉 Not needed for basic use, but important for performance-heavy tasks</strong></p>
          </div>
        </div>
      </div>
    </div>

    {/* Upgrade vs Repair vs Replace */}
    <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-orange-900 mb-4">Upgrade vs Repair vs Replace (HONEST ADVICE)</h3>
      <p className="text-gray-700 mb-4">This is where most people get confused.</p>
    </div>

    <div className="space-y-6">
      {/* Option 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-green-600">✔</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Upgrade (Best Option Most of the Time)</h4>
            <p className="text-gray-700 mb-3">If your system:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Still works</li>
              <li>• Just feels slow</li>
            </ul>
            <p className="text-sm bg-green-50 border border-green-200 rounded p-3 text-gray-800"><strong>👉 Upgrade is usually cheaper and smarter</strong></p>
          </div>
        </div>
      </div>

      {/* Option 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-blue-600">✔</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Repair</h4>
            <p className="text-gray-700 mb-3">If something is broken:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Won't turn on</li>
              <li>• Hardware fault</li>
              <li>• System errors</li>
            </ul>
            <p className="text-sm bg-blue-50 border border-blue-200 rounded p-3 text-gray-800"><strong>👉 See <a href="/computer-repair-brisbane" className="text-blue-700 hover:underline font-semibold">Computer Repair Brisbane</a></strong></p>
          </div>
        </div>
      </div>

      {/* Option 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-red-600">✔</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Replace (Only Sometimes)</h4>
            <p className="text-gray-700 mb-3">Replace your computer if:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• It's very old</li>
              <li>• Multiple parts are failing</li>
              <li>• Repair cost doesn't make sense</li>
            </ul>
            <p className="text-sm bg-red-50 border border-red-200 rounded p-3 text-gray-800"><strong>👉 I'll always tell you honestly if it's not worth fixing</strong></p>
          </div>
        </div>
      </div>
    </div>

    {/* Real Example */}
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-yellow-900 mb-4">Real Example (What We See Often)</h3>
      <div className="space-y-3">
        <div>
          <p className="text-gray-700 font-semibold">Customer thinks:</p>
          <p className="text-gray-700 ml-4">👉 "I need a new computer"</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Actual issue:</p>
          <p className="text-gray-700 ml-4">👉 Old hard drive (HDD)</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Solution:</p>
          <p className="text-gray-700 ml-4">👉 SSD upgrade + fresh Windows</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Result:</p>
          <p className="text-gray-700 ml-4">👉 Computer runs like new again for a fraction of the cost</p>
        </div>
      </div>
    </div>

    {/* Data Safety */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">What About Data Safety?</h3>
      <p className="text-gray-700 mb-4">Before any upgrade:</p>
      <ul className="space-y-2 text-gray-700 ml-4 mb-4">
        <li>✔ We check your data</li>
        <li>✔ Back up important files</li>
        <li>✔ Make sure nothing is lost</li>
      </ul>
      <p className="text-gray-700 mb-4">If there's already an issue:</p>
      <p className="text-sm bg-blue-100 border border-blue-300 rounded p-3 text-gray-800"><strong>👉 See <a href="/data-recovery-brisbane" className="text-blue-700 hover:underline font-semibold">Data Recovery Brisbane</a></strong></p>
    </div>

    {/* How We Handle Upgrades */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">How We Handle Upgrades</h3>
      <p className="text-gray-700 mb-4">At QuickTech Services, we:</p>
      <ul className="space-y-2 text-gray-700 ml-4 mb-4">
        <li>• Check your system</li>
        <li>• Recommend the right upgrade</li>
        <li>• Confirm pricing before starting</li>
        <li>• Install and optimise everything</li>
        <li>• Test the system fully</li>
      </ul>
      <p className="text-sm bg-green-100 border border-green-300 rounded p-3 text-gray-800"><strong>👉 No guesswork, no unnecessary upgrades</strong></p>
    </div>

    {/* Related Services */}
    <div className="bg-gray-50 border-l-4 border-gray-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
      <div className="space-y-2">
        <a href="/computer-upgrades-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">Computer Upgrades Brisbane</a>
        <a href="/slow-computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold ml-2">Slow Computer Repair Brisbane</a>
        <a href="/computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold ml-2">Computer Repair Brisbane</a>
      </div>
    </div>

    {/* Final CTA */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Need Help Deciding?</h3>
      <p className="mb-4 text-blue-100">Not sure if your computer needs an upgrade or replacement? We can check your system and give you honest advice based on what actually makes sense. QuickTech Services provides upgrades across Brisbane with clear pricing and fast turnaround.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="tel:+61428391027">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 w-full sm:w-auto">
            <Phone size={20} /> Call Now
          </Button>
        </a>
        <a href="mailto:info@quicktechservices.com.au">
          <Button variant="outline" className="border-white text-white hover:bg-blue-600 flex items-center gap-2 w-full sm:w-auto">
            <Mail size={20} /> Send Email
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const VirusRemovalContent = () => (
  <div className="space-y-6">
    <p className="text-lg text-gray-700 leading-relaxed">Think your computer might have a virus?</p>
    <p className="text-gray-700 leading-relaxed">Pop-ups, slow performance, strange behaviour — these are all signs something isn't right.</p>
    <p className="text-gray-700 leading-relaxed">Viruses and malware don't just slow your computer down — they can steal personal information, damage files, and even lock your system.</p>

    {/* Common Types Section */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Common Types of Viruses & Malware</h3>
    </div>

    <div className="space-y-6">
      {/* Type 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-orange-600">1</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Malware (General)</h4>
            <p className="text-gray-700 mb-3">This is the most common type we see. Includes:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Adware (pop-ups and ads)</li>
              <li>• Spyware (tracking your activity)</li>
              <li>• Trojans (hidden programs)</li>
            </ul>
            <p className="text-sm bg-orange-50 border border-orange-200 rounded p-3 text-gray-800"><strong>👉 These usually run in the background and slow everything down</strong></p>
          </div>
        </div>
      </div>

      {/* Type 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-red-600">2</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Ransomware</h4>
            <p className="text-gray-700 mb-3">This is serious. It locks your files and demands payment.</p>
            <p className="text-sm bg-red-50 border border-red-200 rounded p-3 text-gray-800"><strong>⚠️ Important: Even if you pay, you might not get your files back</strong></p>
          </div>
        </div>
      </div>

      {/* Type 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-purple-600">3</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Browser Hijackers</h4>
            <p className="text-gray-700 mb-3">These change your:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Homepage</li>
              <li>• Search engine</li>
              <li>• Browser settings</li>
            </ul>
            <p className="text-sm bg-purple-50 border border-purple-200 rounded p-3 text-gray-800"><strong>👉 Usually comes from free downloads or fake software</strong></p>
          </div>
        </div>
      </div>
    </div>

    {/* Warning Signs */}
    <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Signs Your Computer Has a Virus</h3>
      <p className="text-gray-700 mb-4">Watch out for:</p>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>• Unexpected pop-ups and ads</li>
        <li>• Very slow performance</li>
        <li>• Programs opening by themselves</li>
        <li>• Browser redirects</li>
        <li>• Antivirus disabled</li>
        <li>• Missing or locked files</li>
      </ul>
      <p className="text-sm bg-red-100 border border-red-300 rounded p-3 text-gray-800 mt-4"><strong>👉 If you notice these, your system is likely infected</strong></p>
    </div>

    {/* What NOT to Do */}
    <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-red-900 mb-4">🚨 What To Do Immediately</h3>
      <p className="text-gray-700 mb-4">If you think your computer has a virus:</p>
      <div className="space-y-3 mb-4">
        <p className="text-gray-700"><strong>❌ Don't:</strong></p>
        <ul className="space-y-1 text-gray-700 ml-4">
          <li>• Log into banking or important accounts</li>
          <li>• Keep clicking pop-ups</li>
          <li>• Install random "free cleaners"</li>
        </ul>
      </div>
      <div className="space-y-3">
        <p className="text-gray-700"><strong>✔ Do:</strong></p>
        <ul className="space-y-1 text-gray-700 ml-4">
          <li>• Disconnect from internet</li>
          <li>• Stop using the system</li>
          <li>• Get it checked quickly</li>
        </ul>
      </div>
      <p className="text-sm bg-red-100 border border-red-300 rounded p-3 text-gray-800 mt-4"><strong>👉 Acting fast can prevent bigger damage</strong></p>
    </div>

    {/* DIY Removal */}
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-yellow-900 mb-4">Can You Remove a Virus Yourself?</h3>
      <p className="text-gray-700 mb-4"><strong>Sometimes — but not always.</strong></p>
      <p className="text-gray-700 mb-4">Basic scans might remove simple threats, but:</p>
      <ul className="space-y-2 text-gray-700 ml-4 mb-4">
        <li>👉 Many infections stay hidden</li>
        <li>👉 Some come back after restart</li>
        <li>👉 Others damage system files</li>
      </ul>
      <p className="text-sm bg-yellow-100 border border-yellow-300 rounded p-3 text-gray-800"><strong>This is why proper removal is important</strong></p>
    </div>

    {/* Professional Removal */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">How We Remove Viruses Properly</h3>
      <p className="text-gray-700 mb-4"><strong>At QuickTech Services, we don't just "scan and hope".</strong></p>
      <p className="text-gray-700 mb-4">We:</p>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-gray-900">1. Full System Scan</p>
          <p className="text-gray-700">Identify all threats (not just obvious ones)</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">2. Safe Removal</p>
          <p className="text-gray-700">Remove viruses, malware, and hidden files</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">3. System Cleanup</p>
          <p className="text-gray-700">Fix damaged settings and remove leftovers</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">4. Performance Optimisation</p>
          <p className="text-gray-700">Restore speed and stability</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">5. Protection Setup</p>
          <p className="text-gray-700">Install and configure proper security</p>
        </div>
      </div>
      <p className="text-sm bg-green-100 border border-green-300 rounded p-3 text-gray-800 mt-4"><strong>👉 Result: clean, stable system</strong></p>
    </div>

    {/* Related Issues */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <h4 className="text-lg font-bold text-blue-900 mb-4">Still Slow After Virus Removal?</h4>
        <p className="text-gray-700 mb-4">Viruses often leave behind issues.</p>
        <p className="text-gray-700 mb-4">If your system is still slow after infection:</p>
        <a href="/slow-computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">Slow Computer Repair Brisbane</a>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
        <h4 className="text-lg font-bold text-purple-900 mb-4">Missing Files After Infection?</h4>
        <p className="text-gray-700 mb-4">Viruses can delete or encrypt your files.</p>
        <p className="text-gray-700 mb-4">If files are missing:</p>
        <a href="/data-recovery-brisbane" className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-sm font-semibold">Data Recovery Brisbane</a>
      </div>
    </div>

    {/* Prevention */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">How to Prevent Viruses</h3>
      <p className="text-gray-700 mb-4"><strong>Simple steps that actually work:</strong></p>
      <ul className="space-y-2 text-gray-700 ml-4 mb-4">
        <li>• Keep Windows updated</li>
        <li>• Don't click unknown links</li>
        <li>• Avoid downloading from random sites</li>
        <li>• Use proper antivirus</li>
        <li>• Back up important files</li>
      </ul>
      <p className="text-sm bg-green-100 border border-green-300 rounded p-3 text-gray-800"><strong>👉 Most infections we see come from unsafe downloads or fake software</strong></p>
    </div>

    {/* When to Get Help */}
    <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-orange-900 mb-4">When to Get Professional Help</h3>
      <p className="text-gray-700 mb-4">You should get help if:</p>
      <ul className="space-y-2 text-gray-700 ml-4 mb-4">
        <li>• Pop-ups won't stop</li>
        <li>• Your system is very slow</li>
        <li>• Files are missing or locked</li>
        <li>• Antivirus is disabled</li>
        <li>• Problem keeps coming back</li>
      </ul>
      <p className="text-sm bg-orange-100 border border-orange-300 rounded p-3 text-gray-800"><strong>👉 Waiting usually makes it worse</strong></p>
    </div>

    {/* Related Services */}
    <div className="bg-gray-50 border-l-4 border-gray-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
      <div className="space-y-2">
        <a href="/virus-removal-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">Virus Removal Brisbane</a>
        <a href="/computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold ml-2">Computer Repair Brisbane</a>
        <a href="/slow-computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold ml-2">Slow Computer Repair Brisbane</a>
      </div>
    </div>

    {/* Final CTA */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Need Virus Removal in Brisbane?</h3>
      <p className="mb-4 text-blue-100">If your computer is infected, don't risk your data or security. QuickTech Services provides fast, safe virus removal across Brisbane with clear pricing and no guesswork.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="tel:+61428391027">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 w-full sm:w-auto">
            <Phone size={20} /> Call Now
          </Button>
        </a>
        <a href="mailto:info@quicktechservices.com.au">
          <Button variant="outline" className="border-white text-white hover:bg-blue-600 flex items-center gap-2 w-full sm:w-auto">
            <Mail size={20} /> Send Email
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const DataRecoveryContent = () => (
  <div className="space-y-6">
    <p className="text-lg text-gray-700 leading-relaxed">Lost important files, photos, or work documents?</p>
    <p className="text-gray-700 leading-relaxed">Data loss is one of the most stressful problems — and what you do next can make the difference between getting your data back or losing it permanently.</p>
    <p className="text-gray-700 leading-relaxed">In this guide, I'll explain why data loss happens, what you should (and shouldn't) do, and when to get professional help.</p>

    {/* Common Causes Section */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Common Causes of Data Loss</h3>
    </div>

    <div className="space-y-6">
      {/* Cause 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-orange-600">1</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Hard Drive Failure</h4>
            <p className="text-gray-700 mb-3">Hard drives don't last forever. Signs include:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Clicking or ticking noises</li>
              <li>• Very slow access</li>
              <li>• Files disappearing</li>
            </ul>
            <p className="text-sm bg-orange-50 border border-orange-200 rounded p-3 text-gray-800"><strong>This is one of the most common causes we see.</strong></p>
          </div>
        </div>
      </div>

      {/* Cause 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-yellow-600">2</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Accidental Deletion</h4>
            <p className="text-gray-700 mb-3">Deleting files by mistake or formatting a drive happens all the time.</p>
            <p className="text-sm bg-green-50 border border-green-200 rounded p-3 text-gray-800"><strong>✓ The good news: data is often still recoverable if you act quickly.</strong></p>
          </div>
        </div>
      </div>

      {/* Cause 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-red-600">3</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Virus or Malware Attacks</h4>
            <p className="text-gray-700 mb-3">Some viruses can:</p>
            <ul className="text-gray-700 space-y-1 ml-4 mb-3">
              <li>• Delete files</li>
              <li>• Encrypt data (ransomware)</li>
              <li>• Corrupt your system</li>
            </ul>
            <a href="/virus-removal-brisbane" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-semibold">Learn more about Virus Removal Brisbane</a>
          </div>
        </div>
      </div>

      {/* Cause 4 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-purple-600">4</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">System Crash or Windows Failure</h4>
            <p className="text-gray-700 mb-3">If your system crashes or won't boot:</p>
            <p className="text-sm bg-purple-50 border border-purple-200 rounded p-3 text-gray-800"><strong>Your files may still be there — just not accessible</strong></p>
          </div>
        </div>
      </div>

      {/* Cause 5 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-indigo-600">5</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Physical Damage</h4>
            <p className="text-gray-700 mb-3">Dropping a laptop or external drive can cause serious internal damage.</p>
            <p className="text-sm bg-indigo-50 border border-indigo-200 rounded p-3 text-gray-800"><strong>This is more complex and may require specialist recovery.</strong></p>
          </div>
        </div>
      </div>
    </div>

    {/* What NOT to Do */}
    <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ What NOT to Do (VERY IMPORTANT)</h3>
      <p className="text-gray-700 mb-4">If you've lost data:</p>
      <ul className="space-y-2 text-gray-700 ml-4 mb-4">
        <li>❌ Don't keep using the drive</li>
        <li>❌ Don't install recovery software randomly</li>
        <li>❌ Don't save new files to the same drive</li>
      </ul>
      <p className="text-sm bg-red-100 border border-red-300 rounded p-3 text-gray-800"><strong>This can overwrite your data and make recovery impossible</strong></p>
    </div>

    {/* What You SHOULD Do */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">🔷 What You SHOULD Do</h3>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>✔ Stop using the device immediately</li>
        <li>✔ Disconnect the drive if possible</li>
        <li>✔ Avoid installing anything</li>
        <li>✔ Get it checked as soon as possible</li>
      </ul>
      <p className="text-sm bg-green-100 border border-green-300 rounded p-3 text-gray-800 mt-4"><strong>The sooner you act, the higher the recovery success rate</strong></p>
    </div>

    {/* Can Data Be Recovered */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">🔷 Can Data Be Recovered?</h3>
      <p className="text-gray-700 mb-4"><strong>In many cases — yes.</strong> Recovery depends on:</p>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>• Type of damage (logical vs physical)</li>
        <li>• How much the drive has been used after data loss</li>
        <li>• Condition of the hardware</li>
      </ul>
      <p className="text-sm bg-blue-100 border border-blue-300 rounded p-3 text-gray-800 mt-4"><strong>Most logical data loss cases are recoverable</strong></p>
    </div>

    {/* How Data Recovery Works */}
    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-indigo-900 mb-4">🔷 How Data Recovery Works</h3>
      <p className="text-gray-700 mb-4"><strong>At QuickTech Services, we follow a safe process:</strong></p>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-gray-900">1. Diagnosis</p>
          <p className="text-gray-700">We check the condition of the drive and determine the type of failure.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">2. Safe Access or Cloning</p>
          <p className="text-gray-700">If needed, we clone the drive to avoid further damage.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">3. Recovery Process</p>
          <p className="text-gray-700">We scan and recover files using professional tools.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">4. File Check & Return</p>
          <p className="text-gray-700">Recovered data is checked and returned safely.</p>
        </div>
      </div>
    </div>

    {/* Timing & Cost */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
        <h4 className="text-lg font-bold text-amber-900 mb-4">⏱️ How Long Does Recovery Take?</h4>
        <p className="text-gray-700 mb-3">It depends on the situation:</p>
        <ul className="space-y-2 text-gray-700 ml-4">
          <li>• Simple cases → a few hours</li>
          <li>• Larger drives → several hours or longer</li>
          <li>• Complex cases → more time</li>
        </ul>
        <p className="text-sm bg-amber-100 border border-amber-300 rounded p-3 text-gray-800 mt-4"><strong>We'll always explain expected time before starting</strong></p>
      </div>

      <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg">
        <h4 className="text-lg font-bold text-cyan-900 mb-4">💰 How Much Does Data Recovery Cost?</h4>
        <p className="text-gray-700 mb-3">Costs vary depending on:</p>
        <ul className="space-y-2 text-gray-700 ml-4">
          <li>• Drive condition</li>
          <li>• Data size</li>
          <li>• Complexity</li>
        </ul>
        <p className="text-sm bg-cyan-100 border border-cyan-300 rounded p-3 text-gray-800 mt-4"><strong>Diagnosis is $60 (credited if you proceed). We always confirm pricing before starting — no surprises</strong></p>
      </div>
    </div>

    {/* Prevention */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">🔷 Can You Prevent Data Loss?</h3>
      <p className="text-gray-700 mb-4"><strong>Yes — and this is important.</strong> Best practices:</p>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>• Regular backups</li>
        <li>• Cloud storage</li>
        <li>• External drives</li>
        <li>• Antivirus protection</li>
      </ul>
      <p className="text-sm bg-green-100 border border-green-300 rounded p-3 text-gray-800 mt-4"><strong>Prevention is always cheaper than recovery</strong></p>
    </div>

    {/* When to Get Help */}
    <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-orange-900 mb-4">🔷 When to Get Professional Help</h3>
      <p className="text-gray-700 mb-4">You should get help if:</p>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>• You hear clicking noises</li>
        <li>• Your drive isn't detected</li>
        <li>• Files are missing</li>
        <li>• Your system won't boot</li>
      </ul>
      <p className="text-sm bg-orange-100 border border-orange-300 rounded p-3 text-gray-800 mt-4"><strong>Waiting can make it worse</strong></p>
    </div>

    {/* Related Services */}
    <div className="bg-gray-50 border-l-4 border-gray-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">🔷 Related Services</h3>
      <p className="text-gray-700 mb-4">If your issue is related to system problems:</p>
      <div className="space-y-2">
        <a href="/computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">Computer Repair Brisbane</a>
        <a href="/slow-computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold ml-2">Slow Computer Repair Brisbane</a>
        <a href="/virus-removal-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold ml-2">Virus Removal Brisbane</a>
      </div>
    </div>

    {/* Final CTA */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Need Data Recovery in Brisbane?</h3>
      <p className="mb-4 text-blue-100">If you've lost important files, don't risk making it worse. QuickTech Services provides safe, professional data recovery across Brisbane with honest advice and clear pricing.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="tel:+61428391027">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2 w-full sm:w-auto">
            <Phone size={20} /> Call Now
          </Button>
        </a>
        <a href="mailto:info@quicktechservices.com.au">
          <Button variant="outline" className="border-white text-white hover:bg-blue-600 flex items-center gap-2 w-full sm:w-auto">
            <Mail size={20} /> Send Email
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const SlowComputerContent = () => (
  <div className="space-y-6">
    <p className="text-lg text-gray-700 leading-relaxed">Is your computer running slow, freezing, or taking forever to load?</p>
    <p className="text-gray-700 leading-relaxed">This is one of the most common problems we see across Brisbane. The good news is — in most cases, it can be fixed without replacing your computer.</p>
    <p className="text-gray-700 leading-relaxed">In this guide, I'll explain why computers get slow, what you can try yourself, and when it's worth getting professional help.</p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-blue-900 mb-4">Why Is Your Computer Slow?</h3>
      <p className="text-gray-700 mb-4">There are several reasons why your computer might be running slowly. Understanding these causes is the first step toward fixing the problem.</p>
    </div>

    <div className="space-y-6">
      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-blue-600">1</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Too Many Startup Programs</h4>
            <p className="text-gray-700 mb-3">When your computer turns on, a lot of programs start in the background. This slows down boot time and overall performance.</p>
            <p className="text-sm bg-yellow-50 border border-yellow-200 rounded p-3 text-gray-800"><strong>💡 Tip:</strong> We often see machines with 10–20 startup apps running unnecessarily.</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-blue-600">2</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Hard Drive (HDD) Instead of SSD</h4>
            <p className="text-gray-700 mb-3">This is one of the biggest causes of slow computers. Older computers use hard drives (HDD), which are much slower than modern SSDs.</p>
            <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
              <p className="font-semibold text-green-900 mb-2">✔ Upgrading to an SSD can make your computer:</p>
              <ul className="text-gray-800 space-y-1 ml-4">
                <li>• Start in seconds</li>
                <li>• Open programs instantly</li>
                <li>• Feel like a new system</li>
              </ul>
            </div>
            <div className="space-y-2">
              <a href="/slow-computer-repair-brisbane" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">Learn About Slow Computer Repair</a>
              <a href="/computer-upgrades-brisbane" className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-semibold ml-2">Computer Upgrades</a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-blue-600">3</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Low Storage Space</h4>
            <p className="text-gray-700">If your drive is almost full, your system slows down. We recommend keeping at least 15–20% free space.</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0"><AlertCircle className="w-6 h-6 text-red-600" /></div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Malware or Viruses</h4>
            <p className="text-gray-700 mb-3">Viruses run in the background and use system resources.</p>
            <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
              <p className="font-semibold text-red-900 mb-2">⚠️ Warning signs include:</p>
              <ul className="text-gray-800 space-y-1 ml-4">
                <li>• Unexpected pop-ups</li>
                <li>• Slow performance</li>
                <li>• Random programs opening</li>
              </ul>
            </div>
            <a href="/virus-removal-brisbane" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-semibold">Virus Removal Services</a>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg flex-shrink-0"><CheckCircle className="w-6 h-6 text-green-600" /></div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Insufficient RAM</h4>
            <p className="text-gray-700 mb-3">RAM is your computer's short-term memory. If you don't have enough, your computer struggles to run multiple programs.</p>
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="font-semibold text-green-900 mb-2">✔ Modern needs:</p>
              <ul className="text-gray-800 space-y-1 ml-4">
                <li>• 8GB minimum for everyday use</li>
                <li>• 16GB for multitasking</li>
                <li>• 32GB for professional work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0 text-2xl font-bold text-purple-600">6</div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Overheating</h4>
            <p className="text-gray-700 mb-3">When your computer gets too hot, it slows down automatically to protect itself. This is called thermal throttling.</p>
            <p className="text-sm bg-orange-50 border border-orange-200 rounded p-3 text-gray-800"><strong>💡 Tip:</strong> Make sure your vents are clear and consider using a laptop cooling pad.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Quick Fixes Section */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">Quick Fixes You Can Try</h3>
      <p className="text-gray-700 mb-4">Before calling for repair, try these simple steps:</p>
      <ul className="text-gray-700 space-y-2 ml-4 mb-4">
        <li>✓ Restart your computer</li>
        <li>✓ Uninstall programs you don't use</li>
        <li>✓ Run antivirus scan</li>
        <li>✓ Clear temporary files</li>
        <li>✓ Check for Windows/Mac updates</li>
        <li>✓ Disable startup programs</li>
      </ul>
      <p className="text-sm text-gray-700 mt-4 italic">Note: These can help — but usually only temporarily</p>
    </div>

    {/* What Actually Fixes Section */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-green-900 mb-4">What Actually Fixes a Slow Computer</h3>
      <p className="text-gray-700 mb-4">From experience, these are the most effective, long-term fixes:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2">SSD Upgrade</h4>
          <p className="text-gray-700 text-sm">The biggest performance improvement you can make.</p>
        </div>
        <div className="bg-white border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2">Fresh Windows Install</h4>
          <p className="text-gray-700 text-sm">Resets everything properly.</p>
        </div>
        <div className="bg-white border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2">RAM Upgrade</h4>
          <p className="text-gray-700 text-sm">Helps with multitasking and speed.</p>
        </div>
        <div className="bg-white border border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-2">Virus Removal</h4>
          <p className="text-gray-700 text-sm">Removes malware slowing you down.</p>
        </div>
      </div>
      <p className="text-gray-700 mt-6 font-semibold">💰 In many cases, a simple upgrade is cheaper than buying a new PC.</p>
    </div>

    {/* Professional Help Section */}
    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-purple-900 mb-4">When to Get Professional Help</h3>
      <p className="text-gray-700 mb-4">If your computer is still slow after basic fixes, it's time to get it checked.</p>
      <p className="text-gray-700 font-semibold mb-3">We can:</p>
      <div className="space-y-2 text-gray-700 mb-4">
        <p><strong>✓</strong> Diagnose the exact cause</p>
        <p><strong>✓</strong> Recommend the best solution</p>
        <p><strong>✓</strong> Fix the issue properly (not temporary fixes)</p>
      </div>
      <a href="/computer-repair-brisbane" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors font-semibold">Full Computer Repair Services</a>
    </div>

    {/* Repair or Replace Section */}
    <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-8">
      <h3 className="text-xl font-bold text-amber-900 mb-4">Repair or Replace?</h3>
      <p className="text-gray-700 mb-4"><strong>In most cases:</strong> Repair or upgrade is the better option</p>
      <p className="text-gray-700 mb-4"><strong>Only replace if:</strong></p>
      <ul className="space-y-2 text-gray-700 ml-4">
        <li>• Hardware is too old</li>
        <li>• Repair cost doesn't make sense</li>
      </ul>
      <p className="text-gray-700 mt-4 font-semibold">We'll always tell you honestly what's best for your situation.</p>
    </div>
  </div>
);

const articles: Record<string, any> = {
  "how-to-fix-a-slow-computer": {
    title: "How to Fix a Slow Computer (Brisbane Guide)",
    description: "Is your computer running slow, freezing, or taking forever to load? Learn why computers get slow, what you can try yourself, and when it's worth getting professional help.",
    keywords: "slow computer, computer repair Brisbane, fix slow computer, performance optimization",
    date: "2026-04-10",
    readTime: "5 min read",
    component: SlowComputerContent
  },
  "signs-your-laptop-needs-professional-repair": {
    title: "Signs Your Laptop Needs Professional Repair (Brisbane Guide)",
    description: "Is your laptop running slow, overheating, or starting to act up? Learn the most common signs your laptop needs repair and when it's time to get it checked properly.",
    keywords: "laptop repair Brisbane, laptop problems, laptop repair services, computer repair",
    date: "2026-04-10",
    readTime: "5 min read",
    component: LaptopRepairContent
  },
  "data-recovery-guide-brisbane": {
    title: "Data Recovery Guide (Brisbane) – What to Do If You Lose Your Files",
    description: "Lost important files, photos, or work documents? Learn about data recovery options and how QuickTech Services can recover your data safely.",
    keywords: "data recovery Brisbane, hard drive recovery, file recovery, data loss",
    date: "2026-04-10",
    readTime: "6 min read",
    component: DataRecoveryContent
  },
  "virus-removal-and-protection-guide-brisbane": {
    title: "Virus Removal & Protection Guide (Brisbane) – What to Do If Infected",
    description: "Think your computer has a virus? Learn about common malware types, warning signs, removal process, and prevention tips. QuickTech Services offers fast, safe virus removal.",
    keywords: "virus removal Brisbane, malware removal, antivirus, computer security, ransomware",
    date: "2026-04-10",
    readTime: "6 min read",
    component: VirusRemovalContent
  },
  "when-to-upgrade-computer-hardware-brisbane": {
    title: "When to Upgrade Computer Hardware (Brisbane Guide)",
    description: "Is your computer getting slow, freezing, or struggling to keep up? Learn when it's worth upgrading, what parts actually improve performance, and when it's better to repair or replace.",
    keywords: "computer upgrade, hardware upgrade, RAM upgrade, SSD upgrade, Brisbane, computer performance",
    date: "2026-04-10",
    readTime: "6 min read",
    component: UpgradeHardwareContent
  }
};

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const article = articles[id || ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Main Navigation Header */}
      <Header />
      
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
            <ArrowLeft size={20} /> Back to Blog
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <Home size={20} /> Home
          </Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{article.title}</span>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {article.component ? (
              <article.component />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            )}
          </div>


        </article>

        {/* Back to Blog */}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
      </div>
      <Footer />
    </div>
  );
}
