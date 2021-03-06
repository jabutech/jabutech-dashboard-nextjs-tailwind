import ButtonLink from "../components/atoms/ButtonLink";
import ButtonSubmit from "../components/atoms/ButtonSubmit";
import Sidebar from "../components/organisms/Sidebar";

export default function index() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar component */}
        <div className="w-full lg:w-1/6">
          <Sidebar activeMenu="/" />
        </div>

        {/* Category content */}
        <div className="py-5 px-5 w-full lg:w-10/12">
          {/* div 1 content */}
          <div className="mb-5">
            <ButtonLink
              title="Create"
              icon="plus-circle"
              colorButton="green"
              href="tambah-data-revenue"
            />
          </div>
          <div className="mb-5">
            <ButtonSubmit title="Save" colorButton="green" />
          </div>
          {/* div 2 */}
          <div className="border-2 rouded   bg-white">
            {/* title*/}
            <div className="flex p-2 select-none">
              <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto border-b">
                Home
              </div>
            </div>
            {/* Show Home Content */}
            <div className="flex p-2 select-one">
              <div className="heading text-gray-800 w-full pl-3 font-semibold my-auto px-2">
                <div className="mt-3">
                  <div className="w-full mb-5">
                    <div className="text-gray-700 font-normal bg-blue-200 rounded-lg px-2 py-2">
                      Selamat datang{" "}
                      <span className="font-semibold">Rizky</span>, Kamu login
                      sebagai super Admin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
