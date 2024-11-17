"use client";
import { useRouter } from "next/navigation";

type Props = {
  searchParams: string;
  renderProps?: (searchText: string) => React.ReactElement;
};

const Search: React.FC<Props> = (props) => {
  const { searchParams = "" } = props;

  const router = useRouter();
  return (
    <>
      <input
        className="rounded border border-solid rounde  px-4 py-1 text-input-colors"
        placeholder="Search a Note"
        value={searchParams || undefined}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value === "") {
            router.push("/");
          }
          const newSearchParam = new URLSearchParams({
            q: event.target.value,
          });
          router.push(`?${newSearchParam}`);
        }}
      />
    </>
  );
};

export default Search;
