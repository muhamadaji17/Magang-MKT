import { CardLayout } from "../../components/layouts";
import { HeaderContent } from "../../components/molecules";

const Home = () => {
  return (
    <div className="p-6">
      <HeaderContent title={"Overview"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardLayout>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Statistik Pengguna
          </h4>
          <p className="text-gray-500">
            Terdapat 1.245 pengguna aktif saat ini.
          </p>
        </CardLayout>
        <CardLayout>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Total Laporan
          </h4>
          <p className="text-gray-500">Jumlah laporan yang diterima: 45</p>
        </CardLayout>
        <CardLayout>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Pengaturan Terbaru
          </h4>
          <p className="text-gray-500">
            Pengaturan telah diperbarui pada 25 Februari 2025.
          </p>
        </CardLayout>
      </div>
    </div>
  );
};

export default Home;
